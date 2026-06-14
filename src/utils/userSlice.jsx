import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    lang: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action?.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    selectLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addUser, removeUser, selectLang } = userSlice.actions;
export default userSlice.reducer;
