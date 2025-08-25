import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";


export default function Home() {
  return (
  <>
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
  <NavBar className="mt-6"/>
  <HeroSection />
</main>

  </>
  );
}
