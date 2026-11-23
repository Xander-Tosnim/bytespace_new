"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  // Text refs
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Image refs
  const maleStudentRef = useRef<HTMLImageElement>(null);
  const uiTabRef = useRef<HTMLImageElement>(null);
  const happyTabRef = useRef<HTMLImageElement>(null);
  const progressTabRef = useRef<HTMLImageElement>(null);
  const twistLimeRef = useRef<HTMLImageElement>(null);
  const twistWhiteRightRef = useRef<HTMLImageElement>(null);
  const twistWhiteLeftRef = useRef<HTMLImageElement>(null);
  const circleLeftRef = useRef<HTMLImageElement>(null);
  const barrelRef = useRef<HTMLImageElement>(null);
  const triangleRightRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set([h1Ref.current, pRef.current, searchRef.current], {
      y: 40,
      opacity: 0
    });

    gsap.set(maleStudentRef.current, {
      scale: 0.4,
      rotation: -15,
      opacity: 0
    });

    gsap.set([uiTabRef.current, happyTabRef.current, progressTabRef.current], {
      y: 60,
      opacity: 0
    });

    gsap.set(
      [twistLimeRef.current, twistWhiteRightRef.current, twistWhiteLeftRef.current,
       circleLeftRef.current, barrelRef.current, triangleRightRef.current],
      {
        opacity: 0,
        scale: 0.7
      }
    );

    tl.to(h1Ref.current, {
      y: 0,
      opacity: 1,
      duration: 1.2
    })
    .to(
      pRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.9
      },
      "-=0.6"
    )
    .to(
      searchRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.9
      },
      "-=0.4"
    )
    .to(
      maleStudentRef.current,
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.4,
        ease: "back.out(1.7)"
      },
      "-=0.6"
    )
    .to(
      [uiTabRef.current, happyTabRef.current, progressTabRef.current],
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15
      },
      "-=0.4"
    )
    .to(
      [
        twistLimeRef.current,
        twistWhiteRightRef.current,
        twistWhiteLeftRef.current,
        circleLeftRef.current,
        barrelRef.current,
        triangleRightRef.current
      ],
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.1
      },
      "-=0.6"
    );

    gsap.to(twistLimeRef.current, {
      y: -45,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(barrelRef.current, {
      y: 45,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    gsap.to([circleLeftRef.current, twistWhiteRightRef.current, twistWhiteLeftRef.current, triangleRightRef.current], {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });


  }, []);

  return (
    <section className="hero-grid relative w-full min-h-screen overflow-hidden">
      <div className="z-10 mx-auto pt-42 flex max-w-4xl flex-col items-center text-center">
        <h1 ref={h1Ref} className="text-4xl font-bold text-white md:text-5xl lg:text-7xl/20">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p ref={pRef} className="mt-5 max-w-3xl text-md text-white/70">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div ref={searchRef} className="mt-6 flex w-full max-w-lg items-center gap-2">
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
            ref={maleStudentRef}
            src="/images/male-studend.png"
            alt="Student learning"
            width={680}
            height={680}
            className="object-contain drop-shadow-black drop-shadow-2xl translate-x-7"
            priority
          />

          {/* UI/UX Design */}
          <Image
            ref={uiTabRef}
            src="/images/hero-ui_ux-tab.png"
            alt="UI/UX Design"
            width={220}
            height={100}
            className="absolute left-0 top-30 z-20"
          />

          {/* Happy Students */}
          <Image
            ref={happyTabRef}
            src="/images/hero-happy_students-tab.png"
            alt="Happy Students"
            width={240}
            height={120}
            className="absolute -translate-x-14 top-72 z-20"
          />

          {/* Learning Progress */}
          <Image
            ref={progressTabRef}
            src="/images/hero-learning_progress-tab.png"
            alt="Learning Progress"
            width={240}
            height={120}
            className="absolute top-34 right-0 z-20"
          />
        </div>
        {/* 3d twist element start*/}

        <Image
          ref={twistLimeRef}
          src="/images/twist_3d-lime.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute h-130 w-auto bottom-70 z-10 "
        />

        <Image
          ref={twistWhiteRightRef}
          src="/images/twist_3d-white_right.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute w-auto h-80 right-1/2 bottom-6 z-10 translate-x-176"
        />

        <Image
          ref={twistWhiteLeftRef}
          src="/images/twist_3d-white_left.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute w-auto h-60 left-1/2 bottom-80 z-10 -translate-x-146"
        />

        {/* 3d twist element end*/}

        <Image
          ref={circleLeftRef}
          src="/images/circle_model-left.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute w-auto h-80 left-1/2 bottom-6 z-10 -translate-x-170"
        />

        <Image
          ref={barrelRef}
          src="/images/barrel-lime.png"
          alt=""
          width={2000}
          height={2000}
          className="absolute w-auto h-130 right-0 bottom-80 z-10"
        />

        <Image
          ref={triangleRightRef}
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
