import { Link } from "react-router-dom";
import classes from "./Hero.module.css";
import pic from "../../assets/hero.webp";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.headline}>
        <h1>A healthy meal delivered to your door, every single day</h1>
        <p>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <div className={classes.hero_links}>
          <Link>Start eating well!</Link>
          <Link>Learn more</Link>
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
