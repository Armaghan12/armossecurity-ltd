import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-gray-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">

        <Image
          src="/images/security-hero.jpg"
          alt="About ARMOS SECURITY LTD"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            About ARMOS SECURITY LTD
          </h1>
        </div>
      </section>


      {/* ================= COMPANY INTRO ================= */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-10">
          Who We Are
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          ARMOS SECURITY LTD is a professional UK-based security company
          providing reliable and fully compliant security solutions.
          We specialise in Door Supervision, Event Security, and
          24/7 CCTV Monitoring services.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Our mission is to deliver safety, professionalism, and
          peace of mind to businesses, venues, and private clients
          across the United Kingdom.
        </p>

      </section>


      {/* ================= VALUES ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-900 p-10 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Professionalism
              </h3>
              <p className="text-gray-400">
                Highly trained SIA licensed officers maintaining
                the highest standards of conduct and presentation.
              </p>
            </div>

            <div className="bg-gray-900 p-10 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Reliability
              </h3>
              <p className="text-gray-400">
                Consistent and dependable protection for every
                client and every assignment.
              </p>
            </div>

            <div className="bg-gray-900 p-10 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Integrity
              </h3>
              <p className="text-gray-400">
                Honest, transparent service built on trust
                and long-term partnerships.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With a Trusted Security Provider
          </h2>

          <p className="mb-10 text-lg">
            Contact ARMOS SECURITY LTD today to discuss your security requirements.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-900 transition"
          >
            Contact Us
          </Link>

        </div>
      </section>
      
      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-500 text-center py-8 text-sm">
        © {new Date().getFullYear()} ARMOS SECURITY LTD. All Rights Reserved.
      </footer>
      

    </main>
    
  );
}
