import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "game",
  initialState: {
    gamesList: {
      currentGames: null,
      isFetching: false,
      error: false,
    },
    gameDetail: {
      selectedGame: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    // Get All Games
    getStart: (state) => {
      state.gamesList.isFetching = true;
    },
    getSuccess: (state, action) => {
      state.gamesList.isFetching = false;
      state.gamesList.currentGames = action.payload;
      state.gamesList.error = false;
    },
    getFailed: (state) => {
      state.gamesList.isFetching = false;
      state.gamesList.error = true;
    },

    // Get Game Detail
    getDetailStart: (state) => {
      state.gameDetail.isFetching = true;
    },
    getDetailSuccess: (state, action) => {
      state.gameDetail.isFetching = false;
      state.gameDetail.selectedGame = action.payload;
      state.gameDetail.error = false;
    },
    getDetailFailed: (state) => {
      state.gameDetail.isFetching = false;
      state.gameDetail.error = true;
    },
  },
});

export const {
  getStart,
  getSuccess,
  getFailed,
  getDetailStart,
  getDetailSuccess,
  getDetailFailed,
} = gamesSlice.actions;

export default gamesSlice.reducer;
