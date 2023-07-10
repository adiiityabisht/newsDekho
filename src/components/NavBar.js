/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends PureComponent {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            newsdekho
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/business" className="nav-link">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/entertainment" className="nav-link">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/health" className="nav-link">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/technology" className="nav-link">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
