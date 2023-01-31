import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunsetFill, BsMoon } from "react-icons/bs";
import { WiHorizonAlt } from "react-icons/wi";
import { AiOutlineMenu } from "react-icons/ai";
import { Box } from "@chakra-ui/react";
import "../App.css";
// import Logo from "../components/Logo";
import logo from "../media/logo/Otis_logo2.png";

function Navbar() {
  return (
    <div className="night navbar">
      <img src={logo} id="nav_img"></img>
      <Link to="/" id="title">
        Otis IV
      </Link>
      <div id="link-container">
        <button>{/* <BsMoon id="moon" className="nav-icon" /> */}</button>
        <button>
          {/* <WiHorizonAlt id="sunset" className="nav-icon" />  */}
        </button>
        <button>
          <AiOutlineMenu id="menu" className="nav-icon" />
        </button>

        <Link to="/" id="home" className="link">
          <b>Home</b>
        </Link>
        <Link to="/about" id="about" className="link">
          About
        </Link>
        <Link to="/contact" id="contact" className="link">
          Contact
        </Link>
        <Link to="/resume" id="resume" className="link">
          Resume
        </Link>
        <Link to="/digital_art" id="home" className="link">
          Digital Art
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
