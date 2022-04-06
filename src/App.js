import React from "react";
import Nav from "./components/Nav";
import Counter from "./components/counter/Counter";
import Posts from "./components/posts/Posts";
import Stars from "./components/stars/Stars";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.scss";
import UseEffectHook from "./components/hooks/useEffect/UseEffectHook";
import UseContextHook from "./components/hooks/useContext/UseContextHook";
import UseReducerHook from "./components/hooks/useReducer/UseReducerHook";
import UseCallbackHook from "./components/hooks/useCallback/UseCallbackHook";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/counter" element={<Counter />} />
            <Route
              path="/stars"
              element={<Stars totalStars={10} style={{ color: "#444" }} />}
            />
            <Route path="/hooks/useEffect" element={<UseEffectHook />} />
            <Route path="/hooks/useContext" element={<UseContextHook />} />
            <Route path="/hooks/useReducer" element={<UseReducerHook />} />
            <Route path="/hooks/useCallback" element={<UseCallbackHook />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
