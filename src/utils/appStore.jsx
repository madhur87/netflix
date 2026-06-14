import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptReducer from "./gptSearchSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    GPT: gptReducer
  },
});

export default appStore;
