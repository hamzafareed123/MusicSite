import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import FeaturedCourses from "./components/FeaturedCourses";
import ChooseUs from "./components/ChooseUs";


export default function Home() {
  return (
  <>
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  <NavBar className="mt-6"/>
  <HeroSection />
  <FeaturedCourses/>
  <ChooseUs/>
</main>

  </>
  );
}
