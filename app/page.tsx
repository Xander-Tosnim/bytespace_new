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

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <PartnerLogo />

      <div className="w-full bg-white py-10">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="text-center">
            <h2 className="text-5xl font-semibold leading-tight text-black">
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>

            <p className="mt-5 text-lg text-gray-400">
              At Bytespace Courses, we bring you closer to life-changing
              knowledge. Explore a variety of courses across different fields,
              from technology to the arts, and make a difference in your career
              and life.
            </p>
          </div>
        </div>
      </div>

      <CourseTags />
      <CourseCard />

      <div className="w-full bg-white py-24">
        <div className="mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-black">
              Explore Diverse Learning Paths at Bytespace
            </h2>

            <p className="mt-5 text-lg text-gray-400 font-satoshi">
              At Bytespace, we believe in empowering individuals through
              knowledge. Our diverse range of courses spans various fields,
              ensuring there&apos;s something for everyone. Unleash your
              potential and explore our carefully curated categories.
            </p>
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
