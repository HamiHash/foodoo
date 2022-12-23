import { Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import HowHeader from "./components/How/HowHeader";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Hero />
          <How />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
