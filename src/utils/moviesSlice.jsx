import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailer: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action?.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action?.payload
    }
  },
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailer } = moviesSlice.actions;
