import React from "react";

const Navegation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container">
        <a className="navbar-brand fs-4" href="/">
          My Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-5 pe-2">
              <a className="nav-link" aria-current="page" href="/">
                About Me
              </a>
            </li>
            <li className="nav-item fs-5 pe-2">
              <a className="nav-link" href="/">
                My Experience
              </a>
            </li>
            <li className="nav-item fs-5">
              <a className="nav-link" href="/">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegation;
