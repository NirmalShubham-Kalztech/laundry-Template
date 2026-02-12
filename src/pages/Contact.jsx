import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">Get In Touch</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Have questions about our laundry services? We're here to help.
          Reach out to us anytime.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <Phone className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@freshlaundry.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  123 Main Road, Pune, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-blue-600" />
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-gray-600">
                  Mon - Sat: 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-50 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition w-full"
            >
              Send Message →
            </button>

          </form>
        </div>

      </section>

      {/* MAP SECTION (Optional Look Boost) */}
      <section className="w-full h-[400px]">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
}
