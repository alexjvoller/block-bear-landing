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
import { MidCTA } from "@/components/MidCTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Analytics />
      <Testimonials />
      <MidCTA />
      <Trackables />
      <Schedule />
      <Container>
        <GettingStarted />
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
