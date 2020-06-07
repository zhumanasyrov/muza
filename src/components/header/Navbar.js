import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light  rounded">
      <a class="navbar-brand" href="#">
        Muza
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="portfolio" class="nav-link">
              Portfolio
            </Link>
          </li>
          <li class="nav-item">
            <Link to="contact" class="nav-link">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
