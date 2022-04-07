import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Posts from "./components/reactRedux/posts/Posts";
import Todo from "./components/reactRedux/todo/Todo";
import Stars from "./components/stars/Stars";
import Counter from "./components/reactRedux/counter/Counter";
import UseEffectHook from "./components/hooks/useEffect/UseEffectHook";
import UseContextHook from "./components/hooks/useContext/UseContextHook";
import UseReducerHook from "./components/hooks/useReducer/UseReducerHook";
import UseCallbackHook from "./components/hooks/useCallback/UseCallbackHook";
import UseMemoHook from "./components/hooks/useMemo/UseMemoHook";
import UseRefHook from "./components/hooks/useRef/UseRefHook";
import Greetings from "./components/Greetings";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Greetings />} />
            <Route path="/reactRedux/todo" element={<Todo />} />
            <Route path="/reactRedux/posts" element={<Posts />} />
            <Route path="/reactRedux/counter" element={<Counter />} />
            <Route
              path="/stars"
              element={<Stars totalStars={10} style={{ color: "#444" }} />}
            />
            <Route path="/hooks/useEffect" element={<UseEffectHook />} />
            <Route path="/hooks/useContext" element={<UseContextHook />} />
            <Route path="/hooks/useReducer" element={<UseReducerHook />} />
            <Route path="/hooks/useCallback" element={<UseCallbackHook />} />
            <Route path="/hooks/useMemo" element={<UseMemoHook />} />
            <Route path="/hooks/useRef" element={<UseRefHook />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
