
import React from "react";
import Logo from "../images/Fantom_logo.svg"

const Header = () => (
  <header className="app-header">
    <img className="logo" src={Logo} alt="fantom finance" />
    <span className="right-btn">Get Early Access</span>
  </header>
)


export default Header