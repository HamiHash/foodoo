import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="omnifood logo" />
      <nav>
        <li>
          <Link>How it works</Link>
        </li>
        <li>
          <Link>Meals</Link>
        </li>
        <li>
          <Link>Testimonials</Link>
        </li>
        <li>
          <Link>Pricing</Link>
        </li>
        <li>
          <Link className={classes.tryforfree}>Try for free</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
