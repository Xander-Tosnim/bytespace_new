"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function CreatorCTA() {
  // Image refs
  const greenTopLeftTwistRef = useRef<HTMLImageElement>(null);
  const whiteTopLeftTwistRef = useRef<HTMLImageElement>(null);
  const whiteLeftConeRef = useRef<HTMLImageElement>(null);
  const greenBottomLeftOvalRef = useRef<HTMLImageElement>(null);
  const greenTopRightConeRef = useRef<HTMLImageElement>(null);
  const whiteRightDrumRef = useRef<HTMLImageElement>(null);
  const greenBottomRightTwistRef = useRef<HTMLImageElement>(null);

  // Text refs
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Container Ref
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Initial states
      gsap.set(
        [
          greenTopLeftTwistRef.current,
          whiteTopLeftTwistRef.current,
          whiteLeftConeRef.current,
          greenBottomLeftOvalRef.current,
          greenTopRightConeRef.current,
          whiteRightDrumRef.current,
          greenBottomRightTwistRef.current
        ],
        {
          scale: 0.5,
          rotation: 10,
          opacity: 0
        }
      );

      gsap.set([h2Ref.current, pRef.current, buttonRef.current], {
        y: 40,
        opacity: 0
      });

      // Entrance timeline triggered by scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true
        }
      });

      tl.to(
        [
          greenTopLeftTwistRef.current,
          whiteTopLeftTwistRef.current,
          whiteLeftConeRef.current,
          greenBottomLeftOvalRef.current,
          greenTopRightConeRef.current,
          whiteRightDrumRef.current,
          greenBottomRightTwistRef.current
        ],
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }
      )
      .to(
        h2Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out"
        },
        "-=0.6"
      )
      .to(
        pRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out"
        },
        "-=0.5"
      )
      .to(
        buttonRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="creator-cta-grid relative overflow-hidden py-20 px-6">
      {/* ================= DECORATIVE SHAPES ================= */}
      {/* Top Left Elements */}
      <Image
        ref={greenTopLeftTwistRef}
        src="/creator-cta/green-top-left-twist.svg"
        alt=""
        width={340}
        height={340}
        className="absolute top-0 left-0 pointer-events-none z-0"
      />
      <Image
        ref={whiteTopLeftTwistRef}
        src="/creator-cta/white-top-left-twist.svg"
        alt=""
        width={200}
        height={200}
        className="absolute top-4 left-48 pointer-events-none z-0"
      />

      {/* Bottom Left Elements */}
      <Image
        ref={whiteLeftConeRef}
        src="/creator-cta/white-left-cone.svg"
        alt=""
        width={140}
        height={140}
        className="absolute bottom-12 left-0 pointer-events-none z-0"
      />
      <Image
        ref={greenBottomLeftOvalRef}
        src="/creator-cta/green-bottom-left-oval.svg"
        alt=""
        width={300}
        height={300}
        className="absolute bottom-0 left-12 pointer-events-none z-0"
      />

      {/* Top Right Elements */}
      <Image
        ref={greenTopRightConeRef}
        src="/creator-cta/green-top-right-cone.svg"
        alt=""
        width={240}
        height={240}
        className="absolute top-2 right-50 pointer-events-none z-0"
      />
      <Image
        ref={whiteRightDrumRef}
        src="/creator-cta/white-right-drum.svg"
        alt=""
        width={210}
        height={210}
        className="absolute top-10 right-0 pointer-events-none z-0"
      />

      {/* Bottom Right Element */}
      <Image
        ref={greenBottomRightTwistRef}
        src="/creator-cta/green-bottom-right-twist.svg"
        alt=""
        width={390}
        height={390}
        className="absolute bottom-0 right-4 pointer-events-none z-0"
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <h2
          ref={h2Ref}
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>

        <p
          ref={pRef}
          className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal"
        >
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="pt-2">
          <button
            ref={buttonRef}
            className="bg-primary-color hover:bg-lime-200 cursor-pointer text-black font-semibold px-6 py-3 rounded-full text-sm transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}