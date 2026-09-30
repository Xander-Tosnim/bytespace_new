import Image from "next/image";

export const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: "/course-card/course1.jpg",
    rating: "4.5",
    price: "25"
  },
  {
    id: 2,
    title: "Build Digital Asset",
    image: "/course-card/course2.jpg",
    rating: "4.5",
    price: "25"
  },
  {
    id: 3,
    title: "the Power of Big Data",
    image: "/course-card/course3.jpg",
    rating: "4.5",
    price: "25"
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    image: "/course-card/course4.jpg",
    rating: "4.5",
    price: "25"
  },
  {
    id: 5,
    title: "Mastering Money Management",
    image: "/course-card/course5.jpg",
    rating: "4.5",
    price: "25"
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    image: "/course-card/course6.jpg",
    rating: "4.5",
    price: "25"
  },
];

export default function CourseCard() {
  return (
    <div className="bg-white text-black pt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group w-full p-3 overflow-hidden rounded-3xl border border-gray-200 bg-white transition-shadow hover:shadow-xl"
          >
            <div>
              {/* Course image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute gap-3 max-w-sm translate-x-1.5 -translate-y-10 flex justify-center text-black text-sm">
                <span className="bg-white/70 px-2 py-0.5 rounded-2xl">
                  17 Lessons
                </span>
                <span className="bg-white/70 px-2 py-0.5 rounded-2xl">
                  2 hours 16 mins
                </span>
                <span className="bg-white/70 px-2 py-0.5 rounded-2xl">
                  59 Comments
                </span>
              </div>
            </div>

            {/* Course information */}
            <div className="flex flex-col gap-3 mt-5">
              {/* Course Title and Rating */}
              <div className="text-black flex flex-col">
                <div className="flex justify-between gap-1">
                  <h3 className="text-xl font-semibold subpixel-antialiased hover:cursor-pointer text-black truncate">
                    {course.title}
                  </h3>
                  <div className="flex">
                    <span className="text-lg font-medium text-gray-800">
                      {course.rating}
                    </span>
                    <Image
                      src="/course-card/rating_star.svg"
                      alt="Rating"
                      width={26}
                      height={26}
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-satoshi">
                  by{" "}
                  <a href="" className="hover:cursor-pointer text-blue-600">
                    pureparl studio
                  </a>
                </span>
              </div>

              {/* Learners Guidence*/}
                <div className="flex items-center my-2 gap-5">
                  <div className="flex ml-3">
                    <Image
                      src="/course-card/signal_cellular.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-auto"
                    />
                    <span className="text-black text-sm">Beginner</span>
                  </div>
                  <Image
                    src="/course-card/fake_users.png"
                    alt="Learners"
                    width={512}
                    height={128}
                    className="h-7 w-auto object-cover"
                  />
                </div>
              {/* Pricing */}
                <div className="text-gray-600 text-xs">
                    <span className="font-bold text-xl text-secondary-color">${course.price}</span>/lifetime
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
