import React from "react";

export default function Posts() {
  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <h1 class="mb-3 text-light">Post list:</h1>
        <div class="mb-4">
          <div class="bg-warning mb-2 px-3 py-2 rounded">Post 1</div>
          <div class="bg-warning mb-2 px-3 py-2 rounded">Post 2</div>
        </div>
        <hr />
        <button className="btn btn-success">Add Post</button>
      </div>
    </div>
  );
}
