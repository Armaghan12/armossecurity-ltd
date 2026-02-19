import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main className="bg-gray-950 text-white">

      {/* ================= HERO ================= */}
      <section className="relative py-28 text-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            Our Security Services
          </h1>
          <p className="text-lg text-gray-400">
            Elite Protection. Professional Presence. 24/7 Reliability.
          </p>
        </div>
      </section>

      {/* ================= DOOR SUPERVISION ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="relative group">
            <Image
              src="/images/door-supervision.jpg"
              alt="Door Supervision"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl group-hover:bg-black/20 transition duration-500"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">
              Door Supervision
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Our SIA licensed door supervisors provide a strong professional
              presence across venues, corporate events, and hospitality
              locations. We ensure safety, control, and seamless operations.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>• Crowd Control & Conflict Management</li>
              <li>• Access Control & ID Verification</li>
              <li>• Incident Documentation & Reporting</li>
              <li>• Professional Client Interaction</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= CCTV MONITORING ================= */}
      <section className="py-28 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">
              24/7 CCTV Monitoring
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Advanced surveillance systems with real-time monitoring,
              intelligent threat detection, and rapid response coordination
              to safeguard your assets around the clock.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>• Real-Time Monitoring</li>
              <li>• Threat Detection Systems</li>
              <li>• Incident Reporting & Evidence Capture</li>
              <li>• Rapid Emergency Response</li>
            </ul>
          </div>

          <div className="relative group">
            <Image
              src="/images/cctv-monitoring.jpg"
              alt="CCTV Monitoring"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl group-hover:bg-black/20 transition duration-500"></div>
          </div>

        </div>
      </section>

      {/* ================= PREMIUM CTA ================= */}
      <section className="py-28 text-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Require Professional Security Services?
          </h2>

          <p className="mb-10 text-lg">
            Contact ARMOS SECURITY LTD today for a tailored security solution
            designed specifically for your business.
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
