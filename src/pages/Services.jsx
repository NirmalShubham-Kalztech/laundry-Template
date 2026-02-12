import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-24 text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">Premium Laundry Services</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Professional washing, dry cleaning & ironing with doorstep pickup
          and express 24-hour delivery.
        </p>
      </section>

      {/* SERVICES CARDS */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Washing Service
            </h3>
            <p className="text-gray-600 mb-6">
              Premium detergents and fabric care for everyday clothes.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Stain Removal
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Fabric Protection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Fresh Fragrance
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Dry Cleaning
            </h3>
            <p className="text-gray-600 mb-6">
              Special care for delicate and expensive garments.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Suit & Blazer Care
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Silk & Wool Safe
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Deep Cleaning
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              Ironing & Press
            </h3>
            <p className="text-gray-600 mb-6">
              Perfect finishing with wrinkle-free results.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Steam Press
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Sharp Creases
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} /> Same-Day Option
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-gray-100 py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Simple Pricing
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-extrabold text-blue-600 mb-6">₹99</p>
            <p className="text-gray-600 mb-6">Per Kg Washing</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
              Choose Plan
            </button>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl text-center scale-105">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-extrabold mb-6">₹199</p>
            <p className="mb-6">Washing + Ironing</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-gray-200 transition">
              Choose Plan
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Deluxe</h3>
            <p className="text-4xl font-extrabold text-blue-600 mb-6">₹299</p>
            <p className="text-gray-600 mb-6">Dry Cleaning + Express</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
              Choose Plan
            </button>
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">Book Pickup</h3>
            <p className="text-gray-600">
              Schedule pickup from your doorstep in minutes.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-4">🧼</div>
            <h3 className="text-xl font-semibold mb-2">We Clean</h3>
            <p className="text-gray-600">
              Professional cleaning with high-quality products.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Fresh clothes delivered within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready for Fresh & Clean Clothes?
        </h2>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
          Book Pickup Now
        </button>
      </section>

    </div>
  );
}
