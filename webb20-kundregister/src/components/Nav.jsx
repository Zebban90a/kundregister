import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navigation">
      <Link className="home" to="/home">
        <h3>Home</h3>
      </Link>
    </nav>
  );
}
