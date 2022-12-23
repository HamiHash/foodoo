import Header from "./Header";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <main className={classes.container}>
      <Header />
      <section>{props.children}</section>
    </main>
  );
}

export default Layout;
