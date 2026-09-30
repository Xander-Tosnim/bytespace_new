"use client";
import { useState } from "react";

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

export default function CourseTags() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <div className="bg-white py-10">
      <div className="flex flex-wrap justify-center items-center gap-3 max-w-6xl mx-auto p-2">
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
