import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_API || "http://localhost:3001/";

// 🔥 Tạo instance của Axios
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "*/*",
  },
});

// 🚀 Hàm refresh token tự động
const refreshToken = async () => {
  try {
    const res = await axiosInstance.post("/user/refreshToken");
    if (res?.data?.accessToken) {
      localStorage.setItem(
        "user",
        JSON.stringify({ accessToken: res.data.accessToken })
      );
      return res.data.accessToken;
    }
  } catch (err) {
    console.error("Error refreshing token:", err);
    return null;
  }
};

// 🌟 Interceptor tự động thêm token vào request
axiosInstance.interceptors.request.use(
  async (config) => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user?.accessToken) {
      config.headers["Authorization"] = `Bearer ${user.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🌍 Interceptor tự động refresh token nếu lỗi 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshToken();
      if (newToken) {
        axiosInstance.defaults.headers["Authorization"] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

// ⚡️ Hàm clientAPI để gọi API chung
const clientAPI = async (method, url, options = {}) => {
  try {
    let reqData;
    let headers = { Accept: "*/*" };

    if (options instanceof FormData) {
      reqData = options;
      headers["Content-Type"] = "multipart/form-data";
    } else if (typeof options === "object") {
      reqData = JSON.stringify(options);
      headers["Content-Type"] = "application/json";
    } else {
      reqData = new URLSearchParams(Object.entries(options)).toString();
      headers["Content-Type"] = "application/x-www-form-urlencoded";
    }

    const { data } = await axiosInstance({
      url,
      method,
      data: reqData,
      headers,
    });

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export { clientAPI, axiosInstance };
