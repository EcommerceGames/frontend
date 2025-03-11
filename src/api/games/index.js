import toast from "react-hot-toast";
import { clientAPI } from "../client";

export const gamesCall = {
  //create
  create: async (data) => {
    try {
      const response = await clientAPI("post", "/game/createGames", data);
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
      const response = await clientAPI("put", `/game/updateGames/${id}`, data);
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
      const response = await clientAPI("delete", `/game/deleteGames/${id}`);
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
  getGames: async (id) => {
    try {
      const response = await clientAPI("get", `/game/getGame/${id}`);
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
  getAllGames: async () => {
    try {
      const response = await clientAPI("get", "/game/getAllGames");
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
