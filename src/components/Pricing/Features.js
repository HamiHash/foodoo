import { MdAccessTimeFilled } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { BsFillPauseCircleFill } from "react-icons/bs";
import classes from "./Pricing.module.css";
import React from "react";

const Features = () => {
  return (
    <section className="grid grid--4-cols">
      <div className={classes.container}>
        <div>
          <MdAccessTimeFilled className={classes.icon} />
        </div>
        <h2>Never cook again!</h2>
        <p>
          Our subscriptions cover 365 days per year, even including major
          holidays.
        </p>
      </div>
      <div className={classes.container}>
        <div>
          <FaLeaf className={classes.icon} />
        </div>
        <h2>Local and organic</h2>
        <p>
          Our cooks only use local, fresh, and organic products to prepare your
          meals.
        </p>
      </div>
      <div className={classes.container}>
        <div>
          <GiEarthAmerica className={classes.icon} />
        </div>
        <h2>No waste</h2>
        <p>
          All our partners only use reusable containers to package all your
          meals.
        </p>
      </div>
      <div className={classes.container}>
        <div>
          <BsFillPauseCircleFill className={classes.icon} />
        </div>
        <h2>Pause anytime</h2>
        <p>
          Going on vacation? Just pause your subscription, and we refund unused
          days.
        </p>
      </div>
    </section>
  );
};

export default Features;
