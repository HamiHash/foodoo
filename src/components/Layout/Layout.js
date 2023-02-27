import classes from "./Layout.module.css";
import React from "react";

function Layout(props) {
  return <main className={classes.container}>{props.children}</main>;
}

export default Layout;
