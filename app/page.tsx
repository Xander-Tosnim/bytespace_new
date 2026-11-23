"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

import CourseTags from "./components/CourseTags";
import CourseCard from "./components/CourseCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PartnerLogo from "./components/PartnerLogo";
import CourseCategories from "./components/CourseCategories";
import FeatureSection from "./components/FeatureSection";
import CreatorCTA from "./components/CreatorCTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const section1Text =
  "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.";

const section2Text =
  "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.";

export default function Home() {
  const h2Ref1 = useRef<HTMLHeadingElement>(null);
  const pRef1 = useRef<HTMLParagraphElement>(null);

  const h2Ref2 = useRef<HTMLHeadingElement>(null);
  const pRef2 = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // First heading animation
    gsap.from(h2Ref1.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: h2Ref1.current,
        start: "top 80%",
        once: true,
      },
    });

    // Second heading animation
    gsap.from(h2Ref2.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: h2Ref2.current,
        start: "top 80%",
        once: true,
      },
    });

    // First paragraph text animation
    gsap.fromTo(
      pRef1.current,
      {
        text: "",
      },
      {
        text: {
          value: section1Text,
          delimiter: "",
        },
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: pRef1.current,
          start: "top 85%",
          once: true,
        },
      },
    );

    // Second paragraph text animation
    gsap.fromTo(
      pRef2.current,
      {
        text: "",
      },
      {
        text: {
          value: section2Text,
          delimiter: "",
        },
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: pRef2.current,
          start: "top 85%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <PartnerLogo />

      {/* Section 1 */}
      <div className="w-full bg-white py-10">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="text-center">
            <h2
              ref={h2Ref1}
              className="text-5xl font-semibold leading-tight text-black"
            >
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>

            <div className="relative mt-5 text-lg text-gray-400">
              {/* Reserves the full height */}
              <p className="opacity-0" aria-hidden="true">
                {section1Text}
              </p>

              {/* Animated text */}
              <p ref={pRef1} className="absolute inset-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <CourseTags />
      <CourseCard />

      {/* Section 2 */}
      <div className="w-full bg-white py-24">
        <div className="mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <h2
              ref={h2Ref2}
              className="text-4xl font-semibold leading-tight text-black"
            >
              Explore Diverse Learning Paths at Bytespace
            </h2>

            <div className="relative mt-6 text-lg text-gray-400 font-satoshi">
              {/* Reserves the full height */}
              <p className="opacity-0" aria-hidden="true">
                {section2Text}
              </p>

              {/* Animated text */}
              <p ref={pRef2} className="absolute inset-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <CourseCategories />
      <FeatureSection />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </div>
  );
}
