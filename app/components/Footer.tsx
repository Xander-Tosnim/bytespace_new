import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <Image
                src="/byte_space-logo.svg"
                alt="ByteSpace Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-gray-900 tracking-tight font-clash mt-4">
                ByteSpace
              </span>
            </div>

            <p className="text-gray-600 text-xs md:text-xs font-satoshi">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-xs px-5 py-3 rounded-full border border-gray-300 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="bg-primary-color hover:bg-[#c2ed00] hover:cursor-pointer text-black font-semibold px-8 py-3 rounded-full text-sm transition-transform duration-150 active:scale-95 shrink-0"
              >
                Search
              </button>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 pt-2 mt-16">
            
            {/* Column 1 */}
            <ul className="space-y-4 text-sm text-gray-700">
              <li><Link href="#" className="hover:text-black transition-colors">Featured Courses</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Featured Categories</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Business</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">IT</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Design</Link></li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4 text-sm text-gray-700">
              <li><Link href="#" className="hover:text-black transition-colors">Development</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Marketing</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Photography</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Finance</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Sport</Link></li>
            </ul>

            {/* Column 3 */}
            <ul className="space-y-4 text-sm text-gray-700">
              <li><Link href="#" className="hover:text-black transition-colors">Become a Creator</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Affiliate Program</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Help</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
            </ul>

          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-gray-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies-settings" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}