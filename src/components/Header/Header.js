import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import React from "react";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="omnifood logo" />
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link
              to="How"
              activeClass="active"
              smooth={true}
              offset={-50}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              to="Meals"
              activeClass="active"
              smooth={true}
              offset={-50}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              to="Testimonials"
              activeClass="active"
              smooth={true}
              offset={-50}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="Pricing"
              activeClass="active"
              smooth={true}
              offset={-50}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="Cta"
              activeClass="active"
              smooth={true}
              offset={-50}
              duration={500}
              style={{ cursor: "pointer" }}
              className={classes.tryforfree}
            >
              Try for free
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
