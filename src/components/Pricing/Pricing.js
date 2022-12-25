import { Fragment } from "react";
import PricingHeader from "./PricingHeader";
import classes from "./Pricing.module.css";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import Features from "./Features";

const Pricing = () => {
  return (
    <Fragment>
      <PricingHeader />
      <section className="grid grid--2-cols">
        <div className={`card ${classes.starterCard} ${classes.cards}`}>
          <p className={classes.title}>STARTER</p>
          <p className={classes.price}>
            <span>$</span>399
          </p>
          <p className={classes.text}>per month. That's just $13 per meal!</p>
          <ul>
            <li>
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              meal per day
            </li>
            <li>
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              Order from 11am to 9pm
            </li>
            <li>
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              Delivery is free
            </li>
            <li>
              <span>
                <IoClose />{" "}
              </span>
            </li>
          </ul>
          <Link className={`${classes.btn} ${classes.btnStarter}`}>
            Start eating well
          </Link>
        </div>
        <div className={`card ${classes.completeCard} ${classes.cards}`}>
          <p className={classes.title}>COMPLETE</p>
          <p className={classes.price}>
            <span>$</span>649
          </p>
          <p className={classes.textComplete}>
            per month. That's just $11 per meal!
          </p>
          <ul>
            <li>
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              2 meals per day
            </li>
            <li>
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              Order 24/7
            </li>
            <li>
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              Delivery is free
            </li>
            <li>
              <span>
                <IoCheckmarkDoneSharp />
              </span>
              Get access to latest recipes
            </li>
          </ul>
          <Link className={`${classes.btn} ${classes.btnComplete}`}>
            Start eating well
          </Link>
        </div>
      </section>
      <p className={classes.info}>
        Prices include all applicable taxes. You can cancel at any time. Both
        plans include the following:
      </p>
      <Features />
    </Fragment>
  );
};

export default Pricing;
