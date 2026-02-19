import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center text-center px-4">

        {/* Background Image */}
        <Image
          src="/images/security-hero.jpg"
          alt="Professional Security Services"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide mb-5">
            ARMOS SECURITY LTD
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Elite Door Supervision & 24/7 CCTV Monitoring <br className="hidden sm:block" />
            Across the United Kingdom
          </p>

          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-3 sm:px-10 sm:py-4 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400 transition shadow-xl"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-20 bg-black px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-yellow-500">
            Our Security Services
          </h2>

          <div className="grid gap-10 md:grid-cols-2">

            <div className="bg-gray-900 p-8 sm:p-10 rounded-2xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-500">
                Door Supervision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Fully SIA licensed professionals delivering strong,
                controlled security presence for venues and events.
              </p>
            </div>

            <div className="bg-gray-900 p-8 sm:p-10 rounded-2xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-500">
                24/7 CCTV Monitoring
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Advanced surveillance systems with real-time
                monitoring and rapid response.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-500 text-center py-6 text-sm px-4">
        © {new Date().getFullYear()} ARMOS SECURITY LTD. All Rights Reserved.
      </footer>

    </main>
  );
}