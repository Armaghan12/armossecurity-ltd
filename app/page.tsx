import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">

      {/* HERO */}
      <section className="relative h-[55vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center text-center">

        <Image
          src="/images/security-hero.jpg"
          alt="Professional Security Services"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
            ARMOS SECURITY LTD
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8">
            Elite Door Supervision & 24/7 CCTV Monitoring Across the UK
          </p>

          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-yellow-500">
            Our Security Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                Door Supervision
              </h3>
              <p className="text-gray-400">
                Fully SIA licensed professionals ensuring venue safety and control.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                24/7 CCTV Monitoring
              </h3>
              <p className="text-gray-400">
                Real-time monitoring, incident reporting, and rapid response.
              </p>
            </div>

          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-3 rounded-md font-semibold"
            >
              View All Services
            </Link>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-gray-950 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">
            Why Choose ARMOS SECURITY LTD?
          </h2>
          <p className="text-gray-400 text-lg">
            Professional, compliant, and trusted security services delivered
            by fully trained SIA licensed officers.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 text-center py-6 text-sm">
        © {new Date().getFullYear()} ARMOS SECURITY LTD. All Rights Reserved.
      </footer>

    </main>
  );
}
