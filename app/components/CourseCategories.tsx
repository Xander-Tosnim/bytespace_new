import Image from "next/image";

const categories = [
  { name: "Design", icon: "Design.svg" },
  { name: "Development", icon: "Development.svg" },
  { name: "IT & Software", icon: "It_&_Software.svg" },
  { name: "Business", icon: "Business.svg" },
  { name: "Marketing", icon: "Marketing.svg" },
  { name: "Photography", icon: "Photography.svg" },
];

export default function CategoryCards() {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-6xl mx-auto gap-9 py-10 bg-white">
      {categories.map((category) => (
        <div
          key={category.name}
          className="group flex flex-col items-center justify-center gap-4 w-40 h-40 rounded-2xl border border-gray-300 bg-white p-2 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer"
        >
          {/* Lime Green Circle Container */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#CCFF00]">
            <Image
              src={`/course-categories/${category.icon}`}
              alt={category.name}
              width={26}
              height={26}
              className="object-contain"
            />
          </div>

          {/* Category Name */}
          <span className="text-gray-900 font-medium font-satoshi text-lg text-center leading-tight">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
}