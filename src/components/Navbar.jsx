import { useState } from "react";
import lineImage from "../../public/images/lineImage.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "Our Rooms",
    "About Us",
    "Take a Look",
    "FAQ's",
    "Admin Log In",
    "Contact Us",
  ];

  return (
    <nav className="relative w-full bg-bg-dark text-text-light py-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={lineImage}
          className="w-full h-full opacity-40 object-cover object-center"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/cubelogo.png"
              alt="Brand Logo"
              className="w-12 h-12"
            />
            <div className="text-text-light">
              <span className="text-lg font-bold">THE CUBE</span>
              <span className="ml-2 text-sm font-normal">By Propeller</span>
            </div>
          </div>

          <div className="flex items-center gap-10 text-text-light">
            <div className="hidden md:flex items-center gap-10">
              <a
                href="#"
                className="transition-all duration-300 hover:text-accent hover:scale-105 cursor-pointer"
              >
                Home
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-accent hover:scale-105 cursor-pointer"
              >
                Our Rooms
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-accent hover:scale-105 cursor-pointer"
              >
                About Us
              </a>
            </div>
            <button
              type="button"
              className="flex cursor-pointer items-center"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Side Menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full md:w-72 bg-accent text-text-dark p-6 transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="h-8 w-8 cursor-pointer rounded-full bg-white/80 text-text-dark"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-4 text-sm font-semibold">
            {navLinks.map((link) => (
              <a key={link} href="#" className="border-b border-black/20 pb-2">
                {link}
              </a>
            ))}
          </nav>

          <div className="mt-10 flex items-center gap-2 text-text-dark">
            <img
              src="/images/cubelogo.png"
              alt="Brand Logo"
              className="w-6 h-6"
            />
            <span className="font-semibold">THE CUBE By Propeller</span>
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
