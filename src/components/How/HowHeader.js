import { Fragment } from "react";
import classes from "./HowHeader.module.css";

function HowHeader() {
  return (
    <Fragment>
      <p className={classes.how}>HOW IT WORKS</p>
      <p className={classes.main}>
        Your daily dose of health in 3 simple steps
      </p>
    </Fragment>
  );
}

export default HowHeader;
