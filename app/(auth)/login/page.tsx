import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto min-h-[90vh] gap-12">
      {/* Left Column */}
      <div className="w-1/2 space-y-6">
        <div>
          <h2 className="text-2xl font-poppins-semibold text-white">Sign in with ease</h2>
          <p className="text-white/80 text-md font-satoshi mt-2 leading-relaxed max-w-lg">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
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

      {/* Right Column (Form) */}
      <div className="w-1/2 flex justify-end">
        <div className="bg-white flex flex-col justify-around rounded-3xl p-10 w-full lg:min-h-[70vh] max-w-md shadow-xl space-y-6">
          <div>
            <span className="text-md font-satoshi text-secondary-color tracking-wide">
              Sign In
            </span>
            <h1 className="text-4xl font-poppins-semibold text-gray-900 mt-1">
              Welcome Back
            </h1>
          </div>

          <div className="space-y-6">
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
                Sign In
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center my-6">
            <div className="border-t border-gray-300 w-full" />
            <span className="bg-white px-3 text-xs text-gray-500 absolute">or</span>
          </div>

          <div className="flex justify-center gap-4">
            <button className="w-14 h-14 rounded-2xl border border-gray-400 flex items-center justify-center hover:cursor-pointer hover:bg-gray-200 font-bold">
              <Image src="auth/facebook.svg" alt="" width={26} height={26}/>
            </button>
            <button className="w-14 h-14 rounded-2xl border border-gray-400 flex items-center justify-center hover:cursor-pointer hover:bg-gray-200 font-bold">
              <Image src="auth/google.svg" alt="" width={26} height={26}/>
            </button>
          </div>

          <p className="text-center text-sm font-satoshi text-gray-500 pt-2">
            New user?{" "}
            <Link href="/register" className="text-blue-600 font-medium hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}