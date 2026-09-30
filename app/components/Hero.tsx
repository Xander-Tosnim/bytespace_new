import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-grid relative w-full min-h-screen overflow-hidden">
      <div className="z-10 mx-auto pt-42 flex max-w-4xl flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-7xl/20">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-5 max-w-3xl text-md text-white/70">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mt-6 flex w-full max-w-lg items-center gap-2">
          <div className="flex flex-1 items-center rounded-full bg-white px-4 py-2.5">
            <Image
              src="/magnify.svg"
              alt="Search"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            {/* Search bar */}
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent pl-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            {/* Search icon */}
          </div>

          <button className="rounded-full bg-primary-color hover:bg-primary-color/90 px-5 py-2.5 text-sm font-medium text-black cursor-pointer">
            Search
          </button>
        </div>
      </div>

      {/* images Start*/}
      <div>
        <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
          {/* Donught */}
          <div className="absolute -bottom-170 left-1/2 -z-10 h-274 w-284 -translate-x-1/2 rounded-full border-320 border-primary-color" />
          {/* male studend */}
          <Image
            src="/images/male-studend.png"
            alt="Student learning"
            width={500}
            height={600}
            className="object-contain drop-shadow-black drop-shadow-2xl h-auto"
          />

          {/* UI/UX Design */}
          <Image
            src="/images/hero-ui_ux-tab.png"
            alt="UI/UX Design"
            width={220}
            height={100}
            className="absolute -left-16 top-26 z-20"
          />

          {/* Happy Students */}
          <Image
            src="/images/hero-happy_students-tab.png"
            alt="Happy Students"
            width={220}
            height={100}
            className="absolute right-92 top-72 z-20"
          />

          {/* Learning Progress */}
          <Image
            src="/images/hero-learning_progress-tab.png"
            alt="Learning Progress"
            width={220}
            height={100}
            className="absolute top-26 -right-20 z-20"
          />
        </div>
        {/* 3d twist element start*/}

        <Image
          src="/images/twist_3d-lime.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute h-130 w-auto bottom-70 z-10 "
        />

        <Image
          src="/images/twist_3d-white_right.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute w-auto h-80 right-1/2 bottom-6 z-10 translate-x-176"
        />

        <Image
          src="/images/twist_3d-white_left.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute w-auto h-60 left-1/2 bottom-80 z-10 -translate-x-146"
        />

        {/* 3d twist element end*/}

        <Image
          src="/images/circle_model-left.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute w-auto h-80 left-1/2 bottom-6 z-10 -translate-x-170"
        />

        <Image
          src="/images/barrel-lime.png"
          alt=""
          width={2000}
          height={2000}
          className="absolute w-auto h-130 right-0 bottom-80 z-10"
        />

        <Image
          src="/images/triangle-right.png"
          alt=""
          width={2000}
          height={2000}
          className="absolute w-auto h-45 right-1/2 bottom-90 z-10 translate-x-144"
        />
        {/* Images End */}
      </div>
    </section>
  );
}
