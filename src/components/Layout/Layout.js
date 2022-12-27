import classes from "./Layout.module.css";

function Layout(props) {
  return <main className={classes.container}>{props.children}</main>;
}

export default Layout;
