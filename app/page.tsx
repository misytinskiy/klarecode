import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import DecorativeBlock from "../components/DecorativeBlock";
import AboutUs from "../components/AboutUs";
import WhatCanWeDo from "../components/WhatCanWeDo";
import CTASection from "../components/CTASection";
import Numbers from "../components/Numbers";
import SelectedWork from "../components/SelectedWork";
import DevelopmentProcess from "../components/DevelopmentProcess";
import Marquee from "../components/Marquee";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <DecorativeBlock />
      <AboutUs />
      <Marquee />
      <WhatCanWeDo />
      <CTASection />
      <Numbers />
      <SelectedWork />
      <DevelopmentProcess />
      <Testimonials />

      <CTA />
      <Footer />
    </>
  );
}
