import { Link } from "react-router-dom";
import img from "../assets/home1.jpg";

export default function Home() {
  return (
    <>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Fresh, Clean & <br />
              <span className="text-blue-500">Hassle-Free</span> <br />
              Laundry Service
            </h1>

            <p className="text-gray-600 mt-6 text-lg max-w-xl">
              Experience the ultimate convenience with our professional
              laundry and dry cleaning. We pick up, clean, and deliver back to
              your doorstep within 24 hours.
            </p>

            <div className="flex gap-6 mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-md">
                Book Pickup →
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-gray-100 transition">
                Get a Quote
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src={img}
              alt="Laundry"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>

        </div>
      </section>


      {/* SERVICES SECTION */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Premium Laundry Services
          </h2>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            High-quality laundry solutions tailored for your everyday and premium clothing needs.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <div className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-5xl mb-6 text-blue-500">🧺</div>
              <h3 className="text-xl font-bold mb-4">Wash & Fold</h3>
              <p className="text-gray-600">
                Professional washing and folding service with premium detergents.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-5xl mb-6 text-blue-500">👕</div>
              <h3 className="text-xl font-bold mb-4">Dry Cleaning</h3>
              <p className="text-gray-600">
                Special care for delicate and expensive garments.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-5xl mb-6 text-blue-500">🔥</div>
              <h3 className="text-xl font-bold mb-4">Steam Ironing</h3>
              <p className="text-gray-600">
                Wrinkle-free finishing for a fresh professional look.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-extrabold mb-6">
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
              className="rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="bg-gray-100 py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-16">How It Works</h2>

        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-5xl mb-6 text-blue-500">1️⃣</div>
            <h3 className="font-bold text-xl mb-3">Book Pickup</h3>
            <p className="text-gray-600">
              Schedule a pickup time that works best for you.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-6 text-blue-500">2️⃣</div>
            <h3 className="font-bold text-xl mb-3">We Clean</h3>
            <p className="text-gray-600">
              Our experts wash and dry your clothes carefully.
            </p>
          </div>

          <div>
            <div className="text-5xl mb-6 text-blue-500">3️⃣</div>
            <h3 className="font-bold text-xl mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Get fresh and clean clothes delivered to your doorstep.
            </p>
          </div>
        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="bg-blue-500 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready for Fresh & Clean Clothes?
        </h2>
        <p className="mb-8 text-lg">
          Book your pickup today and experience hassle-free laundry service.
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
          Book Now
        </button>
      </section>

    </>
  );
}  
