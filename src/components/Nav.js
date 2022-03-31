import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav
        class="navbar navbar-expand-xl navbar-dark bg-dark"
        aria-label="Sixth navbar example"
      >
        <div class="container">
          <Link class="navbar-brand" to="/">
            Shop
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample06"
            aria-controls="navbarsExample06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample06">
            <ul class="navbar-nav me-auto mb-2 mb-xl-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/counter">
                  Counter
                </Link>
              </li>
            </ul>
            <form>
              <input
                class="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
