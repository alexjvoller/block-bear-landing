import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import GettingStarted from "@/components/GettingStarted";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Analytics from "@/components/Analytics";
import Trackables from "@/components/Trackables";
import Schedule from "@/components/Schedule";
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Analytics />
      <Trackables />
      <Schedule />
      <Container>
        <GettingStarted />
        <Section
          id="Stories"
          pillNumber={5}
          pillText="Stories"
          header="Here our User Stories"
        >
          <Testimonials />
        </Section>
        <Section
          id="Pricing"
          pillNumber={6}
          pillText="Pricing"
          header="Pay per block"
          subheading="No subscription, only play for the blocks and services you want "
        >
          <Pricing />
        </Section>
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
