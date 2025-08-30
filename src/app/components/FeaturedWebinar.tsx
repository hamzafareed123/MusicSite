"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function FeaturedWebinar() {
  const webinars = [
    {
      title: "Mastering Guitar Basics",
      description:
        "Kickstart your guitar journey with essential chords, strumming patterns, and practice routines.",
      slug: "mastering-guitar-basics",
      isFeatured: true,
    },
    {
      title: "Piano for Beginners",
      description:
        "Learn the fundamentals of piano playing, from simple melodies to basic hand coordination.",
      slug: "piano-for-beginners",
      isFeatured: false,
    },
    {
      title: "Unlocking Vocal Power",
      description:
        "Discover techniques to improve your vocal range, tone, and breathing control for confident singing.",
      slug: "unlocking-vocal-power",
      isFeatured: true,
    },
    {
      title: "Music Theory Simplified",
      description:
        "Understand the building blocks of music with an easy guide to scales, chords, and harmony.",
      slug: "music-theory-simplified",
      isFeatured: false,
    },
    {
      title: "Songwriting Essentials",
      description:
        "Learn how to craft meaningful lyrics and melodies that connect with your audience.",
      slug: "songwriting-essentials",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-md text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-8 font-extrabold tracking-tight text-white">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="text-center mt-10">
          <HoverEffect
            items={webinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="text-center mt-10">
          <Link 
            href="/courses"
            className="bg-white text-black p-4 rounded  text-xl"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedWebinar;
