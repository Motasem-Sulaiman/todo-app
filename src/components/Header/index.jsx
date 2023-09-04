import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./styles.scss";
// import { LoginContext } from "../../Context/Settings/context";
import Login from "../auth/login"; 

export default function Header(props) {
  // const Login=useContext(LoginContext)
  return (
    <>
      <div className="home">
        <Link to="/" id="Home">
          Home
        </Link>
        <Link to="/settings" id="Settings">
          settings
        </Link>
 
        <Login/>
      </div>
  
    </>
  );
}
