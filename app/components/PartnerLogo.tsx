import Image from "next/image";

const partnerLogos = [
  "/partner-logo/partner_logo-1.svg",
  "/partner-logo/partner_logo-2.svg",
  "/partner-logo/partner_logo-3.svg",
  "/partner-logo/partner_logo-4.svg",
  "/partner-logo/partner_logo-5.svg",
];

export default function PartnerLogo() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {partnerLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Partner logo ${index + 1}`}
            width={150}
            height={50}
            className="h-auto w-auto"
          />
        ))}
      </div>
    </section>
  );
}