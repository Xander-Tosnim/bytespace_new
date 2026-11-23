"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];
gsap.registerPlugin(ScrollTrigger);

export default function CourseTags() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const buttons = gsap.utils.toArray(container.querySelectorAll("button"));

      gsap.set(buttons, { y: 30, opacity: 0 });

      gsap.to(buttons, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          once: true,
        },
      });
    },
    []
  );

  return (
    <div className="bg-white py-10">
      <div
        ref={containerRef}
        className="flex flex-wrap justify-center items-center gap-3 max-w-6xl mx-auto p-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-md font-medium hover:cursor-pointer transition-colors ${
              activeCategory === category
                ? "bg-[#D4FB20] text-black"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}

        {/* Action button at the end */}
        <button className="px-3 py-2.5 text-sm font-medium text-blue-600 hover:underline hover:cursor-pointer">
          + More
        </button>
      </div>
    </div>
  );
}
