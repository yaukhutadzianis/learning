import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-xl navbar-dark bg-dark"
        aria-label="Sixth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand rounded border px-3" to="/">
            Yaukhuta Dzianis Apps
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample06"
            aria-controls="navbarsExample06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample06">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/stars">
                  Stars
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdownXxl"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hooks
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownXxl">
                  <li>
                    <Link className="dropdown-item" to="/hooks/useEffect">
                      useEffect
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
