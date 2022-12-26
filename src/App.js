import { Routes, Route } from "react-router-dom";
import Cta from "./components/cta/cta";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Layout from "./components/Layout/Layout";
import Meals from "./components/Meals/Meals";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Hero />
          <How />
          <Meals />
          <Testimonials />
          <Pricing />
          <Cta />
          <Footer />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
