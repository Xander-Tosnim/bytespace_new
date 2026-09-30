import Image from "next/image";

export default function CreatorCTA() {
  return (
    <section className="creator-cta-grid relative overflow-hidden py-20 px-6">
      {/* ================= DECORATIVE SHAPES ================= */}
      {/* Top Left Elements */}
      <Image
        src="/creator-cta/green-top-left-twist.svg"
        alt=""
        width={340}
        height={340}
        className="absolute top-0 left-0 pointer-events-none z-0"
      />
      <Image
        src="/creator-cta/white-top-left-twist.svg"
        alt=""
        width={200}
        height={200}
        className="absolute top-4 left-48 pointer-events-none z-0"
      />

      {/* Bottom Left Elements */}
      <Image
        src="/creator-cta/white-left-cone.svg"
        alt=""
        width={140}
        height={140}
        className="absolute bottom-12 left-0 pointer-events-none z-0"
      />
      <Image
        src="/creator-cta/green-bottom-left-oval.svg"
        alt=""
        width={300}
        height={300}
        className="absolute bottom-0 left-12 pointer-events-none z-0"
      />

      {/* Top Right Elements */}
      <Image
        src="/creator-cta/green-top-right-cone.svg"
        alt=""
        width={240}
        height={240}
        className="absolute top-2 right-50 pointer-events-none z-0"
      />
      <Image
        src="/creator-cta/white-right-drum.svg"
        alt=""
        width={210}
        height={210}
        className="absolute top-10 right-0 pointer-events-none z-0"
      />

      {/* Bottom Right Element */}
      <Image
        src="/creator-cta/green-bottom-right-twist.svg"
        alt=""
        width={390}
        height={390}
        className="absolute bottom-0 right-4 pointer-events-none z-0"
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>

        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="pt-2">
          <button className="bg-primary-color hover:bg-lime-200 cursor-pointer text-black font-semibold px-6 py-3 rounded-full text-sm transition-transform duration-300 hover:scale-105 active:scale-95">
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
}