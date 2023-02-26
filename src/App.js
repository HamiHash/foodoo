import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Meals from "./components/Meals/Meals";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Cta from "./components/cta/cta";
import Footer from "./components/Footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <Layout>
      <Header />
      <div className="divHeader">
        <Element name="Hero">
          <Hero />
        </Element>
        <Element name="How">
          <How />
        </Element>
        <Element name="Meals">
          <Meals />
        </Element>
        <Element name="Testimonials">
          <Testimonials />
        </Element>
        <Element name="Pricing">
          <Pricing />
        </Element>
        <Element name="Cta">
          <Cta />
        </Element>
        <Footer />
      </div>
    </Layout>
  );
}

export default App;
