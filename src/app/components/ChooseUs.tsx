"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
  {
    title: "Learn Anytime, Anywhere",
    description:
      "Access music lessons online at your own pace. Whether you’re a beginner or an advanced musician, our platform makes it easy to practice and improve your skills anytime, anywhere.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <img
          src="/Images/guiter1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Interactive music lesson demo"
        />
      </div>
    ),
  },
  {
    title: "Interactive Lessons",
    description:
      "Watch, listen, and play along with step-by-step interactive lessons. Track your progress in real time and get instant feedback to make learning more engaging and fun.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/Images/guiter.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Interactive music lesson demo"
        />
      </div>
    ),
  },
  {
    title: "Music Production Tools",
    description:
      "Learn how to compose, mix, and produce professional-quality tracks. Explore beat-making, recording techniques, and sound design with guided tutorials and hands-on projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
       <img
          src="/Images/guiter3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Interactive music lesson demo"
          
        />
      </div>
    ),
  },
  {
    title: "Join a Creative Community",
    description:
      "Connect with other musicians, share your work, and collaborate on new projects. Get feedback from instructors and peers to keep growing as an artist.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Join a Creative Community
      </div>
    ),
  },
];

function ChooseUs() {
  return (
    <div>
      <h1 className=" py-15 text-3xl leading-8 font-extrabold tracking-tight
       text-white md:text-4xl text-center bg-gray-900">Why Choose Us</h1>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default ChooseUs;
