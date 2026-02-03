import lineImage from "../../public/images/lineImage.png";
function Navbar() {
  return (
    <nav className="relative w-full bg-bg-dark text-text-light py-6">
      <div className=" absolute inset-0 z-0">
        <img
          src={lineImage}
          className="w-full h-full opacity-40 object-cover object-center"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center flex-row">
          <a className="text-primary text-xl font-bold">Brand Logo</a>
          <div className="flex items-center gap-10 text-primary">
            <a href="#">Home</a>
            <a href="#">Our Rooms</a>
            <a href="#">About Us</a>
            {/* Icon */}
            <button>
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
    </nav>
  );
}

export default Navbar;
