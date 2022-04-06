import React from "react";
import {
  getInputValueReducer,
  addPostReducer,
  deletePostReducer
} from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Posts() {
  const addPostInputValue = useSelector(
    (state) => state.posts.addPostInputValue
  );
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <h1 className="mb-3 text-light">Post list:</h1>
        <div className="mb-4">
          {posts.map((posts) => {
            return (
              <div
                key={Date.now() + Math.random()}
                className="bg-warning mb-2 px-3 py-2 rounded d-flex align-items-center justify-content-between"
              >
                <div>{posts.title}</div>
                <div>
                  <button
                    className="btn btn-danger px-2 py-0"
                    onClick={() => dispatch(deletePostReducer(posts.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <input
          className="form-control d-block mb-3"
          type="text"
          placeholder="Post Title"
          value={addPostInputValue}
          onChange={(event) =>
            dispatch(getInputValueReducer(event.target.value))
          }
        />
        <button
          className="btn btn-success"
          onClick={() => dispatch(addPostReducer())}
        >
          Add Post
        </button>
      </div>
    </div>
  );
}
