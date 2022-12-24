import { Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Layout from "./components/Layout/Layout";
import Meals from "./components/Meals/Meals";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Hero />
          <How />
          <Meals />
          <Testimonials />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
