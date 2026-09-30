import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hero-grid min-h-screen relative">
      {/* Top Left Logo */}
      <Image
        src="/byte_space-logo.svg"
        alt="ByteSpace Logo"
        width={48}
        height={48}
        className="translate-x-10 lg:translate-x-50 translate-y-10"
      />
      {children}
    </div>
  );
}