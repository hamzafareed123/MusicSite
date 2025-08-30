import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "../utils/cn";

function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah L.",
      quote:
        "This site completely changed the way I discover new artists. The playlists are fire 🔥 and always on point! I used to spend hours on different platforms, but now everything I need is right here. It feels like the site really gets my taste and keeps me inspired every day.",
    },
    {
      name: "Daniel K.",
      quote:
        "I love how easy it is to explore different genres here. Found so many underground gems I’d never hear elsewhere. The design is smooth, the recommendations are fresh, and it makes music discovery fun again. Honestly, I can’t imagine going back to how I used to find songs.",
    },
    {
      name: "Amira P.",
      quote:
        "The recommendations feel super personal—like the site actually knows my vibe. Perfect for late-night listening, studying, or even workouts. The curated playlists are full of surprises, and every time I log in, it feels like a new musical journey waiting to unfold.",
    },
    {
      name: "James R.",
      quote:
        "Streaming quality is amazing and the UI is smooth. It’s become my go-to place for music every day 🎧. I also love the way the community features work—I’ve connected with other fans who share the same taste in music, and it makes listening feel way more social.",
    },
    {
      name: "Emily W.",
      quote:
        "As someone who listens to music almost 24/7, this platform is a lifesaver. The lyrics integration, mood-based playlists, and personalized recommendations make it feel like a friend suggesting songs. It keeps me motivated at work and relaxed during late-night drives.",
    },
    {
      name: "Omar N.",
      quote:
        "I’ve tried a bunch of streaming platforms, but none gave me this level of personalization. The way this site adapts to my habits is insane. It feels alive, constantly learning and refining my experience. Whether I’m in the mood for classics or discovering niche artists, it delivers.",
    },
  ];

  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 opacity-80",
          "[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]"
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] dark:bg-black"></div>

      <div className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="lg:text-5xl sm:text-3xl md:text-3xl text-center z-10 mb-10 font-bold">
          Here Our Harmony: Voices of Success
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4  lg:px-8 ">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
