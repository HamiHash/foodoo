import classes from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import React from "react";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.column}>
        <Link
          to="Hero"
          activeClass="active"
          smooth={true}
          offset={-50}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="foodoo trademark" />
        </Link>
        <div></div>
        <p>Copyright © 2023 by FOODOO, Inc. All rights reserved.</p>
      </div>
      <nav className={classes.column}>
        <h2>Contact us</h2>
        <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
        <p>415-201-6370 hello@omnifood.com</p>
      </nav>
      <nav className={classes.column}>
        <h2>Account</h2>
        <p>Create account</p>
        <p>Sign in</p>
        <p>iOS app</p>
        <p>Android app</p>
      </nav>
      <nav className={classes.column}>
        <h2>Company</h2>
        <p>About FOODOO</p>
        <p>For Business</p>
        <p>Cooking partners</p>
        <p>Careers</p>
      </nav>
      <nav className={classes.column}>
        <h2>Resources</h2>
        <p>Recipe directory</p>
        <p>Help center</p>
        <p>Privacy & terms</p>
      </nav>
    </footer>
  );
};

export default Footer;
