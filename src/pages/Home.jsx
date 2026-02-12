import { Link } from "react-router-dom";
import img from "../assets/home1.jpg";

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Fresh, Clean & <br />
              <span className="text-blue-500">Hassle-Free</span> <br />
              Laundry Service
            </h1>

            <p className="text-gray-600 mt-6 text-base md:text-lg max-w-xl">
              Experience the ultimate convenience with our professional
              laundry and dry cleaning. We pick up, clean, and deliver back to
              your doorstep within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-md">
                Book Pickup →
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-gray-100 transition">
                Get a Quote
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <img
              src={img}
              alt="Laundry"
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>


      {/* SERVICES SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Premium Laundry Services
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            High-quality laundry solutions tailored for your everyday and premium clothing needs.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: "🧺", title: "Wash & Fold", desc: "Professional washing and folding service with premium detergents." },
              { icon: "👕", title: "Dry Cleaning", desc: "Special care for delicate and expensive garments." },
              { icon: "🔥", title: "Steam Ironing", desc: "Wrinkle-free finishing for a fresh professional look." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
                <div className="text-5xl mb-6 text-blue-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Why Choose Our Laundry Service?
            </h2>

            <ul className="space-y-4 text-gray-600 text-lg">
              <li>✔ 24 Hour Express Delivery</li>
              <li>✔ Affordable Pricing</li>
              <li>✔ Eco-Friendly Products</li>
              <li>✔ Free Pickup & Drop</li>
            </ul>
          </div>

          <div>
            <img
              src={img}
              alt="Laundry Service"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
          How It Works
        </h2>

        <div className="max-w-6xl mx-auto px-4 md:px-8 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { icon: "1️⃣", title: "Book Pickup", desc: "Schedule a pickup time that works best for you." },
            { icon: "2️⃣", title: "We Clean", desc: "Our experts wash and dry your clothes carefully." },
            { icon: "3️⃣", title: "Fast Delivery", desc: "Get fresh and clean clothes delivered to your doorstep." }
          ].map((step, index) => (
            <div key={index}>
              <div className="text-5xl mb-6 text-blue-500">{step.icon}</div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="bg-blue-500 py-20 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready for Fresh & Clean Clothes?
        </h2>

        <p className="mb-8 text-base md:text-lg">
          Book your pickup today and experience hassle-free laundry service.
        </p>

        <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
          Book Now
        </button>
      </section>

    </div>
  );
}
