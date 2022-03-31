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
      const posts = state.posts;
      posts.push(post);
      state.posts = posts;

      state.addPostInputValue = "";
      console.log(state.posts);
    },
    deletePostReducer: (state) => {
      console.log(2);
    }
  }
});

export const {
  getInputValueReducer,
  addPostReducer,
  deletePostReducer
} = postsSlice.actions;

export default postsSlice.reducer;
