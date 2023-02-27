import React, { Fragment } from "react";
import TestimonialsHeader from "./TestimonialsHeader";
import classes from "./Testimonials.module.css";
import ronaldo from "../../assets/customer/ronaldo.jpg";
import andrewTate from "../../assets/customer/andrewTate.jpg";
import dave from "../../assets/customer/dave.jpg";
import hannah from "../../assets/customer/hannah.jpg";
import Gallary from "./Gallary";

const Testimonials = () => {
  return (
    <Fragment>
      <TestimonialsHeader />
      <section className={`grid--2-cols grid ${classes.Testimonials}`}>
        <div className="grid grid--2-cols">
          <div className={classes.quote}>
            <img src={dave} alt="customer portrait" />
            <p className={classes.feedback}>
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </p>
            <p className={classes.customer}>— Dave Bryson</p>
          </div>
          <div className={classes.quote}>
            <img src={hannah} alt="customer portrait" />
            <p className={classes.feedback}>
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing that im not worried about food anymore!
            </p>
            <p className={classes.customer}>— Ben Hadley</p>
          </div>
          <div className={classes.quote}>
            <img src={ronaldo} alt="customer portrait" />
            <p className={classes.feedback}>
              I got Foodoo for the whole family, and it frees up so much time!
              Plus, everything is organic, vegan and also without plastic! Siuu
            </p>
            <p className={classes.customer}>— Cristiano Ronaldo</p>
          </div>
          <div className={classes.quote}>
            <img src={andrewTate} alt="customer portrait" />
            <p className={classes.feedback}>
              Foodoo is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </p>
            <p className={classes.customer}>— Andrew Tate</p>
          </div>
        </div>
        <Gallary />
      </section>
    </Fragment>
  );
};

export default Testimonials;
