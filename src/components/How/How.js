import { Fragment } from "react";
import classes from "./How.module.css";
import HowHeader from "./HowHeader";

function How() {
  return (
    <Fragment>
      <HowHeader />
      <div className={classes.gridcontainer}></div>
    </Fragment>
  );
}

export default How;
