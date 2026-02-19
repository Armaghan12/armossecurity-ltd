import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] md:h-[70vh] flex items-center justify-center text-center">


        <Image
          src="/images/security-hero.jpg"
          alt="Professional Security Services"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            ARMOS SECURITY LTD
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Elite Door Supervision & 24/7 CCTV Monitoring
            Across the United Kingdom
          </p>

          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-10 py-4 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400 transition shadow-2xl"
          >
            Explore Our Services
          </Link>
        </div>
      </section>


      {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-20 text-yellow-500">
            Our Security Services
          </h2>

          <div className="grid md:grid-cols-2 gap-14">

            <div className="bg-gray-900 p-12 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-500">
                Door Supervision
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg">
                Fully SIA licensed professionals delivering strong,
                controlled security presence for venues, events,
                and commercial properties.
              </p>
            </div>

            <div className="bg-gray-900 p-12 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-500">
                24/7 CCTV Monitoring
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg">
                Advanced remote surveillance systems with real-time
                threat detection and rapid incident response.
              </p>
            </div>

          </div>

          <div className="mt-16">
            <Link
              href="/services"
              className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-10 py-4 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400 transition shadow-xl"
            >
              View All Services
            </Link>
          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 bg-gray-950 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-yellow-500">
            Why Choose ARMOS SECURITY LTD?
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We provide reliable, compliant, and professional security
            solutions tailored to each client. Our officers are fully
            trained, SIA licensed, and committed to delivering the
            highest standards of protection and professionalism.
          </p>

        </div>
      </section>


      {/* ================= CONTACT CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Require Professional Security Services?
          </h2>

          <p className="mb-10 text-lg">
            Contact ARMOS SECURITY LTD today for a tailored security solution.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-900 transition shadow-xl"
          >
            Request a Quote
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
