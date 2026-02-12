import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="px-6 md:px-12 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-xl">
            <span className="text-white text-xl font-bold">💧</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-gray-800">Aqua</span>
            <span className="text-blue-500">Fresh</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/services" className="hover:text-blue-500 transition">Services</Link>
          <Link to="/howitworks" className="hover:text-blue-500 transition">How It Works</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>

          <Link to="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-lg">
          <div className="flex flex-col gap-5 text-gray-700 font-medium">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/services">Services</Link>
            <Link onClick={() => setOpen(false)} to="/howitworks">How It Works</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

            <Link onClick={() => setOpen(false)} to="/contact">
              <button className="bg-blue-500 text-white w-full py-2 rounded-full mt-2">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
