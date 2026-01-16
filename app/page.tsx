import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Expertise from "../components/Expertise";
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
      <Expertise />
      <Numbers />
      <SelectedWork />
      <DevelopmentProcess />
      <Marquee />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
