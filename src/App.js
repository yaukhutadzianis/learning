import Nav from "./components/Nav";

import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
}
