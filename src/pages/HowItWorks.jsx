import work from "../assets/work.jpg";
export default function HowItWorks() {
  return (
    <div className="bg-white">

      {/* ================= HOW IT WORKS ================= */}
     <section className="w-full bg-gray-100">
      <div className="grid md:grid-cols-2 min-h-[600px]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16">

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How It Works?
          </h2>

          <p className="text-2xl text-blue-600 font-bold mb-6">
            Easy As 1-2-3-4
          </p>

          <p className="text-gray-600 max-w-xl mb-12">
            We've simplified the laundry process so you can spend your time on
            what truly matters. No more sorting, washing, or drying.
          </p>

          <div className="space-y-10">

            {[
              {
                number: "01.",
                title: "Schedule Pickup",
                desc: "Book a slot that works for you via our app or website.",
              },
              {
                number: "02.",
                title: "We Collect",
                desc: "Our agent arrives at your doorstep to pick up your items.",
              },
              {
                number: "03.",
                title: "Expert Cleaning",
                desc: "Your clothes are treated with premium care by experts.",
              },
              {
                number: "04.",
                title: "Fast Delivery",
                desc: "Freshly cleaned clothes are delivered back in 24-48 hours.",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6">

                {/* Icon Box */}
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  {step.number}
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-full">
          <img
            src={work}
            alt="Laundry Worker"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>

      {/* ================= PRICING ================= */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Affordable Pricing Plans
        </h2>
        <p className="text-gray-600 mb-16">
          Choose a plan that fits your lifestyle. No hidden fees, cancel anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Essential */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Essential</h3>
            <p className="text-gray-500 mb-6">
              Perfect for singles or couples with light laundry needs.
            </p>
            <p className="text-4xl font-extrabold mb-1">$29</p>
            <p className="text-gray-500 mb-6">/per month</p>
            <ul className="text-gray-600 space-y-2 mb-8">
              <li>Up to 15kg Wash & Fold</li>
              <li>Free Pickup & Delivery</li>
              <li>Standard Detergent</li>
              <li>48-hour Turnaround</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
              Choose Essential
            </button>
          </div>

          {/* Premium */}
          <div className="bg-blue-600 text-white p-10 rounded-2xl shadow-xl scale-105 relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 text-sm rounded-full font-semibold">
              MOST POPULAR
            </span>
            <h3 className="text-2xl font-bold mb-3 mt-4">Premium</h3>
            <p className="opacity-90 mb-6">
              Our most popular plan for busy families and professionals.
            </p>
            <p className="text-4xl font-extrabold mb-1">$59</p>
            <p className="opacity-90 mb-6">/per month</p>
            <ul className="space-y-2 mb-8 opacity-90">
              <li>Up to 35kg Wash & Fold</li>
              <li>2 Suits Dry Cleaned</li>
              <li>Premium Scented Detergent</li>
              <li>24-hour Turnaround</li>
              <li>Priority Support</li>
            </ul>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-gray-200 transition">
              Choose Premium
            </button>
          </div>

          {/* Elite */}
          <div className="bg-gray-50 p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Elite</h3>
            <p className="text-gray-500 mb-6">
              The ultimate care for your wardrobe with unlimited perks.
            </p>
            <p className="text-4xl font-extrabold mb-1">$99</p>
            <p className="text-gray-500 mb-6">/per month</p>
            <ul className="text-gray-600 space-y-2 mb-8">
              <li>Up to 60kg Wash & Fold</li>
              <li>5 Suits Dry Cleaned</li>
              <li>Steam Press Included</li>
              <li>Same-day Express Delivery</li>
              <li>Special Fabric Treatment</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
              Choose Elite
            </button>
          </div>

        </div>

        <p className="text-gray-500 mt-8 text-sm">
          Pay-per-item pricing also available upon request
        </p>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-50 py-24 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-16">
          Join thousands of happy customers who trust us with their laundry everyday.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              quote:
                "Absolutely love the service! The express 24h delivery saved me before a big conference. Everything was perfectly folded and smelled amazing.",
              name: "Sarah Jenkins",
              role: "Marketing Director",
            },
            {
              quote:
                "The attention to detail for my delicate items is impressive. Finally found a dry cleaner I can trust with my designer shirts.",
              name: "Michael Chen",
              role: "Freelance Designer",
            },
            {
              quote:
                "Being a busy doctor, I barely have time for chores. AquaFresh has been a life-saver. Their pickup and delivery is always on time.",
              name: "Emily Rodriguez",
              role: "Doctor",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-left"
            >
              <p className="text-gray-600 mb-6">"{review.quote}"</p>
              <h4 className="font-bold">{review.name}</h4>
              <p className="text-gray-500 text-sm">{review.role}</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}
