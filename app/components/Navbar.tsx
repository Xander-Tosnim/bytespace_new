"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-500 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-md shadow-sm text-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/byte_space-logo.svg"
            alt="ByteSpace"
            width={30}
            height={30}
          />
          <span className="mt-3 ml-2 font-clash text-2xl">ByteSpace</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/creators">Creators</Link>
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-7 md:flex">
          <Link href="/login">Sign In</Link>
          <Link href="/register">Join Us</Link>
          <Link href="/cart">
            <Image src={scrolled ? "/cart-black.svg" : "/cart.svg"} alt="" width={14} height={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
}