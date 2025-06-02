import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Statistics from "@/components/Statistics";
import Trackables from "@/components/Trackables";
import Schedule from "@/components/Schedule";
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Statistics />
      <Trackables />
      <Schedule />
      <Container>
        <Section
          id="pricing"
          pillNumber={4}
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
