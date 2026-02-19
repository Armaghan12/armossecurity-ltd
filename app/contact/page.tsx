import Link from "next/link";

export default function Contact() {
  return (
    <main className="bg-gray-950 text-white">

      {/* HERO */}
      <section className="h-[45vh] flex items-center justify-center text-center bg-black">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
          Contact ARMOS SECURITY LTD
        </h1>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE – CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-yellow-500">
            Get In Touch
          </h2>

          <p className="text-gray-400 mb-6 text-lg">
            We provide professional security services across the UK.
            Contact us today for enquiries or tailored security solutions.
          </p>

          <div className="space-y-4 text-gray-400">
            <p><strong>Email:</strong> info@armossecurityltd.co.uk</p>
            <p><strong>Phone:</strong> +44 7481 347772</p>
            <p><strong>Location:</strong> United Kingdom</p>
          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <form className="bg-gray-900 p-10 rounded-2xl space-y-6 shadow-xl">

          <div>
            <label className="block mb-2 text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Message</label>
            <textarea
              rows={4}
              className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="How can we help?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-3 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400 transition"
          >
            Send Message
          </button>

        </form>

      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-black">
        <h2 className="text-3xl font-bold mb-6 text-yellow-500">
          Need a Detailed Quote?
        </h2>

        <Link
          href="/quote"
          className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-8 py-4 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400 transition"
        >
          Request a Quote
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 text-center py-8 text-sm">
        © {new Date().getFullYear()} ARMOS SECURITY LTD. All Rights Reserved.
      </footer>

    </main>
  );
}
