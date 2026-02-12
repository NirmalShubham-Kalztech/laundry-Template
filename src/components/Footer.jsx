import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* COLUMN 1 - LOGO + ABOUT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              💧
            </div>
            <h2 className="text-2xl font-bold">
              Aqua<span className="text-blue-600">Fresh</span>
            </h2>
          </div>

          <p className="text-gray-500 leading-relaxed mb-6">
            Redefining laundry with modern technology and premium care.
            Freshness delivered to your doorstep.
          </p>

          <div className="flex gap-4">
            <div className="p-3 bg-white rounded-full shadow hover:shadow-md transition cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="p-3 bg-white rounded-full shadow hover:shadow-md transition cursor-pointer">
              <Instagram size={18} />
            </div>
            <div className="p-3 bg-white rounded-full shadow hover:shadow-md transition cursor-pointer">
              <Twitter size={18} />
            </div>
            <div className="p-3 bg-white rounded-full shadow hover:shadow-md transition cursor-pointer">
              <Linkedin size={18} />
            </div>
          </div>
        </div>

        {/* COLUMN 2 - SERVICES */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-gray-900">Services</h3>
          <ul className="space-y-3 text-gray-500">
            <li className="hover:text-blue-600 cursor-pointer">Wash & Fold</li>
            <li className="hover:text-blue-600 cursor-pointer">Dry Cleaning</li>
            <li className="hover:text-blue-600 cursor-pointer">Ironing & Steam Press</li>
            <li className="hover:text-blue-600 cursor-pointer">Express 24h Service</li>
          </ul>
        </div>

        {/* COLUMN 3 - QUICK LINKS */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-gray-900">Quick Links</h3>
          <ul className="space-y-3 text-gray-500">
            <li className="hover:text-blue-600 cursor-pointer">How It Works</li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing Plans</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* COLUMN 4 - NEWSLETTER */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-gray-900">Newsletter</h3>
          <p className="text-gray-500 mb-6">
            Subscribe for tips and special offers.
          </p>

          <div className="flex bg-white rounded-full overflow-hidden shadow">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-5 py-3 outline-none text-sm"
            />
            <button className="bg-blue-600 text-white px-6 font-semibold hover:bg-blue-700 transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="border-t mt-16 pt-6 text-center text-gray-400 text-sm">
        © 2026 AquaFresh Laundry. All rights reserved.
      </div>
    </footer>
  );
}
