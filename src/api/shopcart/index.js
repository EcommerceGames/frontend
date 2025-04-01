import toast from "react-hot-toast";
import { clientAPI } from "../client";

export const shopCartCall = {
  //create
  create: async (data) => {
    try {
      const response = await clientAPI("post", "/cart/createCart", data);
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
      const response = await clientAPI("put", `/cart/updateCart/${id}`, data);
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
  delete: async (data) => {
    try {
      const response = await clientAPI("delete", "/cart/deleteCart", data);
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
  getWishlist: async (id) => {
    try {
      const response = await clientAPI("get", `/cart/getCart/${id}`);
      return response;
    } catch (error) {
      console.error("Create error:", error);
    }
  },
};
