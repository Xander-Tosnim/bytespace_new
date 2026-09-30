import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Register | ByteSpace",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto min-h-[90vh] gap-12">
      {/* Left Column */}
      <div className="w-1/2 space-y-6">
        <div>
          <h2 className="text-2xl font-poppins-semibold text-white">
            Sign up and come in
          </h2>
          <p className="text-white/80 text-md font-satoshi mt-2 leading-relaxed max-w-lg">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
          </p>
        </div>

        <Image
          src="/auth/auth-course-cards.png"
          alt="Course Showcase"
          width={520}
          height={520}
          className="object-contain hidden md:block"
          priority
        />
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 flex justify-end">
        <div className="bg-white flex flex-col justify-around rounded-3xl p-10 w-full lg:min-h-[70vh] max-w-md shadow-xl space-y-2">
          <div>
            <span className="text-md font-satoshi text-secondary-color tracking-wide">
              Create an Account
            </span>
            <h1 className="text-4xl font-poppins-semibold text-gray-900 mt-1">
              Welcome to <br />
              ByteSpace
            </h1>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-satoshi text-gray-700 ml-1 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jamie Davis"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-satoshi text-gray-700 ml-1 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="designer@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-satoshi text-gray-700 ml-1 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button className="bg-primary-color hover:cursor-pointer text-black font-medium px-8 py-2.5 rounded-full text-sm">
                Continue
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 pt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
