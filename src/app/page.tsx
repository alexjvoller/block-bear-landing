import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import GettingStarted from "@/components/GettingStarted";
import Logos from "@/components/Logos";
import Container from "@/components/Container";
import Section from "@/components/Section";
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
          header="Here Our User Stories"
        >
          <Testimonials />
        </Section>
        <Section
          id="pricing"
          pillNumber={6}
          pillText="Pricing"
          header="Pay Per Block"
          subheading="No subscription, only play for the blocks and services you want."
        >
          <Pricing />
        </Section>
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
