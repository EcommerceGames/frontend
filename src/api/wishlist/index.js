import toast from "react-hot-toast";
import { clientAPI } from "../client";

export const wishListCall = {
  //create
  create: async (data) => {
    try {
      const response = await clientAPI(
        "post",
        "/wishlist/createWishList",
        data
      );
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
      const response = await clientAPI(
        "delete",
        `/wishlist/deleteWishList/${id}`
      );
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
      const response = await clientAPI("get", `/wishlist/getWishList/${id}`);
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
