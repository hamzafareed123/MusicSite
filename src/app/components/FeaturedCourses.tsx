"use client";
import Link from "next/link";
import courseData from "../data/music-data.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Data {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const Featured = courseData.courses.filter(
    (course: Data) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-md text-teal-600 font-semibold tracking-wide UpperCase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white md:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
        {Featured.map((data: Data) => (
          <div key={data.id} className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm  h-full overflow-hidden sm:p-10 bg-white dark:bg-zinc-900">
              <div className=" sm:p-6 flex flex-col items-center text-center flex-grow">
                <h1 className="text-xl text-black mt-2 mb-1 dark:text-neutral-200">
                  {data.title}
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-5">
                  {data.description}
                </p>
                <Link
                  href={`courses/${data.slug}`}
                  className="rounded-full pl-4 pr-4 py-5 text-white flex items-center
                 space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                >
                  Learn More
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="bg-gradient-to-r from-cyan-500 font-bold rounded-xl text-md text-white p-5
          hover:bg-gradient-to-bl focus:ring-cyan-100 dark:focus:ring-cyan-600"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
