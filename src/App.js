import Nav from "./components/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>{/* <Route path="" element={<Counter />} /> */}</Routes>
      </div>
    </Router>
  );
}
