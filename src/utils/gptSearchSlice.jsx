import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "GPT",
  initialState: {
    showGPTSearch: false
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});


export const {toggleGPTSearchView} = gptSearch.actions
export default gptSearch.reducer;