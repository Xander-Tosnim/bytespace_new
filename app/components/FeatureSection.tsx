import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-6 min-h-screen">
      {/* ================= BACKGROUND BLUR BLOBS ================= */}
      <Image
        src="/feature-section/green-top-left.png"
        alt=""
        width={800}
        height={800}
        className="absolute top-0 left-0 pointer-events-none z-0"
      />
      <Image
        src="/feature-section/blue-top-right.png"
        alt=""
        width={800}
        height={800}
        className="absolute top-0 right-0 pointer-events-none z-0"
      />
      <Image
        src="/feature-section/blue-middle-left.png"
        alt=""
        width={650}
        height={650}
        className="absolute top-10 left-0 pointer-events-none z-0"
      />
      <Image
        src="/feature-section/green-bottom-left.png"
        alt=""
        width={600}
        height={600}
        className="absolute bottom-10 left-0 pointer-events-none z-0"
      />
      <Image
        src="/feature-section/blue-bottom-right.png"
        alt=""
        width={600}
        height={600}
        className="absolute bottom-0 right-0 pointer-events-none z-0"
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-6">   
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Top Feature */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">12K</h3>
                <p className="text-sm text-gray-500 font-medium mt-1">Students</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">70+</h3>
                <p className="text-sm text-gray-500 font-medium mt-1">Courses</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">16</h3>
                <p className="text-sm text-gray-500 font-medium mt-1">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Boy Studend Image */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/feature-section/student-boy.png"
              alt="Student using laptop with learning progress"
              width={520}
              height={520}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Bottom Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Girl Studend Image */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/feature-section/student-girl.png"
              alt="Course creator with stats cards"
              width={520}
              height={520}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Text & Feature List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-lg">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Image
                    src="/feature-section/check.svg"
                    alt="Check icon"
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="text-gray-900 font-medium text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}