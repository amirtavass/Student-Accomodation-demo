function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Logo */}
          <div>
            <img
              src="/images/logo.png"
              alt="Brand Logo"
              className="h-12 mb-4"
            />
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Student Street</p>
              <p>Bolton, UK</p>
              <p>info@studentaccom.co.uk</p>
              <p>+44 123 456 7890</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-orange-500 transition">
                📘
              </a>
              <a href="#" className="text-2xl hover:text-orange-500 transition">
                🎵
              </a>
              <a href="#" className="text-2xl hover:text-orange-500 transition">
                📸
              </a>
            </div>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal & Policies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Complaints
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Modern Slavery
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition">
            BOOK A ROOM →
          </button>
          <button className="border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded-lg hover:bg-orange-500 hover:text-white transition">
            ARRANGE A VIEWING →
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          <p>© 2025 Brand name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
