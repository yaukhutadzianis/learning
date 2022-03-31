import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    addPostInputValue: "",
    posts: []
  },
  reducers: {
    getInputValueReducer: (state, action) => {
      state.addPostInputValue = action.payload;
    },
    addPostReducer: (state) => {
      const post = {
        id: Date.now() + Math.random(),
        title: state.addPostInputValue
      };
      state.posts.push(post);

      state.addPostInputValue = "";
    },
    deletePostReducer: (state) => {}
  }
});

export const {
  getInputValueReducer,
  addPostReducer,
  deletePostReducer
} = postsSlice.actions;

export default postsSlice.reducer;
