import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/testimonials/sarah.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/testimonials/james.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/testimonials/alex.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20 px-6">
      {/* ================= BACKGROUND BLUR BLOBS ================= */}
      <Image
        src="/testimonials/blue-bottom-left-blur.png"
        alt=""
        width={850}
        height={850}
        className="absolute bottom-0 left-0 pointer-events-none z-0"
      />
      <Image
        src="/testimonials/green-top-middle-blur.png"
        alt=""
        width={800}
        height={800}
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
      />
      <Image
        src="/testimonials/green-rigtht-blur.png"
        alt=""
        width={850}
        height={850}
        className="absolute top-1/4 right-0 pointer-events-none z-0"
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-28">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
            Discover What Our<br />Community Is Saying
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-wide font-satoshi">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((person) => (
            <div
              key={person.name}
              className="bg-white backdrop-blur-lg rounded-3xl p-6 border border-gray-100/80 shadow-lg flex flex-col space-y-6"
            >
              <div className="space-y-4">
                {/* Avatar */}
                <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={person.avatar}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Person Info */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 font-satoshi">
                    {person.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-500 text-md leading-relaxed font-light font-satoshi tracking-wider">
                {person.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}