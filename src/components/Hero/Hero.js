import classes from "./Hero.module.css";
import pic from "../../assets/hero.png";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.headline}>
        <div>
          <h1>
            A healthy meal<span>.</span>
          </h1>
          <h1>
            delivered to your door<span>,</span>
          </h1>
          <h1>
            {" "}
            every single day<span>!</span>
          </h1>
        </div>
        <p>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <div className={classes.hero_links}>
          <Link
            to="Cta"
            activeClass="active"
            smooth={true}
            offset={-50}
            duration={500}
            style={{ cursor: "pointer" }}
            className={classes.first}
          >
            Start eating well!
          </Link>
          <Link
            to="Meals"
            activeClass="active"
            smooth={true}
            offset={-50}
            duration={500}
            style={{ cursor: "pointer" }}
            className={classes.second}
          >
            Learn more
          </Link>
        </div>
        <div>
          <div></div>
          <p>250,000+ meals delivered last year!</p>
        </div>
      </div>
      <img className={classes.hero_img} src={pic} alt="Someone eating food" />
    </section>
  );
}

export default Hero;
