
import React from "react";
import Logo from "../images/Fantom_logo.svg"
import {header} from '@fullpage/react-fullpage';
import { Link } from "gatsby"
const Header = () => (
  <header className="app-header">
    <img className="logo" src={Logo} alt="fantom finance" />
    <header><a href='#05'  className="right-btn">Get Early Access</a></header>
  </header>
)


export default Header