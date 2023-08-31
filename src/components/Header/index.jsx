import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Header(props) {
  return (
    <>
      <div className="home">
        <Link to="/" id="Home">
          Home
        </Link>
        <Link to="/settings" id="Settings">
          settings
        </Link>
      </div>
    </>
  );
}
