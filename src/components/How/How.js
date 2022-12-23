import { Fragment } from "react";
import classes from "./How.module.css";
import HowHeader from "./HowHeader";
import s1 from "../../assets/app/screen1.png";
import s2 from "../../assets/app/screen2.png";
import s3 from "../../assets/app/screen3.png";

function How() {
  return (
    <Fragment>
      <HowHeader />
      <div className={classes.grid2Cols}>
        <div>
          <p className={classes.stepNumber}>01</p>
          <p className={classes.headingSecondary}>
            Tell us what you like (and what not)
          </p>
          <p className={classes.stepDescription}>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className={classes.stepImgBox}>
          <img src={s1} alt="Mobile screen" />
        </div>
        <div className={classes.stepImgBox}>
          <img src={s2} alt="Mobile screen" />
        </div>
        <div>
          <p className={classes.stepNumber}>02</p>
          <p className={classes.headingSecondary2}>
            Approve your weekly meal plan
          </p>
          <p className={classes.stepDescription}>
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>
        <div>
          <p className={classes.stepNumber}>03</p>
          <p className={classes.headingSecondary}>
            Receive meals at convenient time
          </p>
          <p className={classes.stepDescription}>
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className={classes.stepImgBox}>
          <img src={s3} alt="Mobile screen" />
        </div>
      </div>
    </Fragment>
  );
}

export default How;
