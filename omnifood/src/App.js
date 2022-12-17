import { Switch, Route, Redirect } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
