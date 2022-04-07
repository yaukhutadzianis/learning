import React from "react";

export default function Greetings() {
  return (
    <div className="container-fluid py-5 bg-secondary">
      <div className="container py-3">
        <h1 className="fs-4">
          Hello, I am{" "}
          <span className="bg-warning px-1 mx-1">Yaukhuta Dzianis</span>
          and this is my Learning resource.
        </h1>
        <p>
          This is where I test and practice my
          <span className="bg-warning px-1 mx-1">Javascript</span> and
          <span className="bg-warning px-1 mx-1">React / Redux</span> Skills
        </p>
      </div>
    </div>
  );
}
