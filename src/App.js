import React from "react";
import Nav from "./components/Nav";
import Counter from "./components/counter/Counter";
import Posts from "./components/posts/Posts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.scss";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
