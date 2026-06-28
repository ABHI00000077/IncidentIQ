import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import StatsSection from "@/components/landing/StatsSection";
import FeatureSection from "@/components/landing/FeatureSection";
import LiveFeed from "@/components/landing/LiveFeed";
import InfrastructureMap from "@/components/landing/InfrastructureMap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <FeatureSection />
      <LiveFeed />
      <InfrastructureMap />
    </>
  );
}