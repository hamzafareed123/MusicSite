import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import FeaturedCourses from "./components/FeaturedCourses";
import ChooseUs from "./components/ChooseUs";
import TestimonialSection from "./components/TestimonialSection";
import FutureWebinar from "./components/FeaturedWebinar";
import FeaturedWebinar from "./components/FeaturedWebinar";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";


export default function Home() {
  return (
  <>
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  
  <HeroSection />
  <FeaturedCourses/>
  <ChooseUs/>
  <TestimonialSection/>
  <FeaturedWebinar/>
  <Instructor/>
  
</main>

  </>
  );
}
