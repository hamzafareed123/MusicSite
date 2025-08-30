import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md felx flex-col items-center
    justify-center relative overflow-hidden mx-auto md:py-0 "
    >
      <Spotlight
        className="-top-40 left-100 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center py-30">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the ark of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto py-10">
          Master the Ark of Music – Your ultimate playground for learning,
          creating, and sharing music. From beginner riffs to pro-level tracks,
          we’ve got you covered.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.8rem"
              className="bg-white dark:bg-slate-900 text-md text-black dark:text-white 
             border border-neutral-200 dark:border-slate-800 
             transition-all duration-300 ease-in-out 
             hover:scale-105 hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
