import Image from "next/image";
import AuroraHero from "./components/Header";
import Features from  "./components/Features";
import AboutUs from "./components/AboutUs";
import Educate from "./components/Educate";
import FancyTestimonialsSlider from "./components/testimonial";
import IntegrationDiagram from "./components/Node"
import Ticker from "./components/Ticker"
import Footer from "./components/Footer"
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
    <AuroraHero />
    <Ticker />
    <AboutUs />
    <IntegrationDiagram />
    <Features />
    <Educate />
    <FancyTestimonialsSlider />
    <Contact />
    <Footer />
    </>  

  );
}
