import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/reactRedux/counter/counterSlice";
import postsReducer from "../components/reactRedux/posts/postsSlice";
import todoReducer from "../components/reactRedux/todo/todoSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    posts: postsReducer
  }
});
