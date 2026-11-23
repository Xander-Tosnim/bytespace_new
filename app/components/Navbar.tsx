"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const logoImageRef = useRef<HTMLImageElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const image = logoImageRef.current;
    if (!image) return;

    const rect = image.getBoundingClientRect();
    const startX = window.innerWidth / 2 - rect.left - rect.width / 2;

    // Starting state: logo centered horizontally, above its spot; everything else hidden
    gsap.set(image, { x: startX, y: -50, scale: 2 });
    gsap.set([logoTextRef.current, navRef.current, actionsRef.current], {
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(image, {
      y: 5,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        image,
        {
          scale: 1,
          y: 0,
          x: 0,
          rotation: -720,
          duration: 1,
          ease: "power2.inOut",
        },
        ">",
      )
      .to(
        [logoTextRef.current, navRef.current, actionsRef.current],
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        ">",
      );

    // 3. Logo text and other children become visible
    tl.to(
      [logoTextRef.current, navRef.current, actionsRef.current],
      {
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () => {
          navRef.current?.classList.remove("pointer-events-none");
          actionsRef.current?.classList.remove("pointer-events-none");
        },
      },
      ">",
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // To register scrolling position immidiately after refresh

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
            ref={logoImageRef}
            src="/byte_space-logo.svg"
            alt="ByteSpace"
            width={30}
            height={30}
          />
          <span
            ref={logoTextRef}
            className="mt-3 ml-2 font-clash text-2xl opacity-0"
          >
            ByteSpace
          </span>
        </Link>

        {/* Navigation */}
        <div
          ref={navRef}
          className="items-center gap-8 md:flex opacity-0 pointer-events-none"
        >
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/creators">Creators</Link>
        </div>

        {/* Actions */}
        <div
          ref={actionsRef}
          className="items-center gap-7 md:flex opacity-0 pointer-events-none"
        >
          <Link href="/login">Sign In</Link>
          <Link href="/register">Join Us</Link>
          <Link href="/cart">
            <Image
              src={scrolled ? "/cart-black.svg" : "/cart.svg"}
              alt=""
              width={14}
              height={14}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
