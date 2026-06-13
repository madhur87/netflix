import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: [],
    nowPopularMovie: [],
    nowTopRatedMovie: [],
    upcomingMovie: [],
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action?.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action?.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovie = action?.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.nowTopRatedMovie = action?.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovie = action?.payload
    }
  },
});

export default moviesSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies
} = moviesSlice.actions;
