import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    addPostInputValue: "",
    posts: [
      {
        id: 1,
        title: "Post 1"
      },
      {
        id: 2,
        title: "Post 2"
      }
    ]
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
    },
    deletePostReducer: (state, action) => {
      state.posts = state.posts.filter(function (item) {
        return item.id != action.payload;
      });
    }
  }
});

export const {
  getInputValueReducer,
  addPostReducer,
  deletePostReducer
} = postsSlice.actions;

export default postsSlice.reducer;
