export default function Quote() {
  return (
    <main className="bg-gray-950 text-white">

      <section className="h-[45vh] flex items-center justify-center text-center bg-black">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
          Request a Security Quote
        </h1>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">

        <form className="bg-gray-900 p-12 rounded-2xl space-y-8 shadow-xl">

          <div>
            <label className="block mb-2 text-sm text-gray-400">Company / Client Name</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Service Required</label>
            <select
              className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option>Door Supervision</option>
              <option>Event Security</option>
              <option>CCTV Monitoring</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Event / Site Location</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Location"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Details</label>
            <textarea
              rows={4}
              className="w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Tell us about your requirements"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-4 rounded-md font-semibold hover:from-yellow-500 hover:to-yellow-400 transition"
          >
            Submit Quote Request
          </button>

        </form>

      </section>

      <footer className="bg-black text-gray-500 text-center py-8 text-sm">
        © {new Date().getFullYear()} ARMOS SECURITY LTD. All Rights Reserved.
      </footer>

    </main>
  );
}