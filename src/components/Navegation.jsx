import React from "react";
import { links } from "../data";
const Navegation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 fixed-top">
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
            {links.map((link) => {
              return (
                <li className="nav-item fs-5 pe-2">
                  <a href={link.url} key={link.id} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegation;
