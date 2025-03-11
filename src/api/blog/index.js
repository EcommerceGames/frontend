import toast from "react-hot-toast";
import { clientAPI } from "../client";

export const blogsCall = {
  //create
  create: async (data) => {
    try {
      const response = await clientAPI("post", "/blog/createBlog", data);
      return response;
    } catch (error) {
      console.error("Create error:", error);
      const errorMessages = error?.response?.data?.errors?.map(
        (err) => err.message
      ) || [
        error?.response?.data?.message ||
          error?.response?.statusText ||
          error?.message ||
          "An unexpected error occurred.",
      ];

      errorMessages.forEach((message) => {
        toast.error(`${message}`);
      });
      throw error;
    }
  },

  //update
  update: async (id, data) => {
    try {
      const response = await clientAPI("put", `/blog/updateBlog/${id}`, data);
      return response;
    } catch (error) {
      console.error("Create error:", error);
      const errorMessages = error?.response?.data?.errors?.map(
        (err) => err.message
      ) || [
        error?.response?.data?.message ||
          error?.response?.statusText ||
          error?.message ||
          "An unexpected error occurred.",
      ];

      errorMessages.forEach((message) => {
        toast.error(`${message}`);
      });
      throw error;
    }
  },

  //delete
  delete: async (id) => {
    try {
      const response = await clientAPI("delete", `/blog/deleteBlog/${id}`);
      return response;
    } catch (error) {
      console.error("Create error:", error);
      const errorMessages = error?.response?.data?.errors?.map(
        (err) => err.message
      ) || [
        error?.response?.data?.message ||
          error?.response?.statusText ||
          error?.message ||
          "An unexpected error occurred.",
      ];

      errorMessages.forEach((message) => {
        toast.error(`${message}`);
      });
      throw error;
    }
  },

  //getGame
  getBlogs: async (id) => {
    try {
      const response = await clientAPI("get", `/blog/getBlog/${id}`);
      return response;
    } catch (error) {
      console.error("Create error:", error);
      const errorMessages = error?.response?.data?.errors?.map(
        (err) => err.message
      ) || [
        error?.response?.data?.message ||
          error?.response?.statusText ||
          error?.message ||
          "An unexpected error occurred.",
      ];

      errorMessages.forEach((message) => {
        toast.error(`${message}`);
      });
      throw error;
    }
  },
  //getAllGames
  getAllBlogs: async () => {
    try {
      const response = await clientAPI("get", "/game/getAllBlog");
      return response;
    } catch (error) {
      console.error("Create error:", error);
      const errorMessages = error?.response?.data?.errors?.map(
        (err) => err.message
      ) || [
        error?.response?.data?.message ||
          error?.response?.statusText ||
          error?.message ||
          "An unexpected error occurred.",
      ];

      errorMessages.forEach((message) => {
        toast.error(`${message}`);
      });
      throw error;
    }
  },
};
