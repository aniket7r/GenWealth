import Image from "next/image";
import Educate from "./educate";
import VelocityText from "./Scroll";
import AboutKaizen from "./AboutUs";
import KaizenFeatures from './KaizenFeatures'
import KaizenPricing from './KaizenPricing'
import TestimonialKaizen from "./KaizenTestimonial";
import Footer from "./Footer"
export default function Home() {
  return (
    <main>
      <Educate />
      <AboutKaizen />
      <KaizenFeatures />
      <KaizenPricing />
      <TestimonialKaizen />
      <Footer />
    </main>
  );
}