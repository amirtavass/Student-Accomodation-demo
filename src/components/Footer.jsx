import InstagramIcon from "../../public/images/icons/instagramicon.png";
import TiktokIcon from "../../public/images/icons/tiktokicon.png";
import FacebookIcon from "../../public/images/icons/fbicon.png";
import ArrowIcon from "../../public/images/circledarrowicon.png";
function Footer() {
  return (
    <footer className="w-full bg-bg-dark text-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-8 text-center lg:text-left">
          {/* Column 1 */}
          <div className="flex flex-col items-center lg:items-start gap-6 text-text-light">
            <img
              src="/images/cubelogo.png"
              alt="Brand Logo"
              className="w-12 h-12"
            />
            <div>
              <h4 className="font-bold text-lg mb-2 text-accent">Contact Us</h4>
              <div className="space-y-1">
                <p>The Cube, 87 Bradshawgate, Bolton BL1 1QD, United Kingdom</p>
                <p>Bolton, UK</p>
                <p>thecubebookings@propletting.co.uk</p>
                <p>+44 1204 358 034</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center lg:items-start gap-6 text-text-light">
            <div>
              <h4 className="font-bold text-lg mb-2 text-accent">Address</h4>
              <div className="space-y-1">
                <p>1 College Way</p>
                <p>Bolton</p>
                <p>Greater Manchester</p>
                <p>BL1 2BA</p>
                <p>United Kingdom</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-accent">
                Opening Hours
              </h4>
              <p>Mon - Fri: 8am - 5pm</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-accent">
                Legal & Policies
              </h4>
              <ul className="space-y-1 text-text-light text-sm">
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/thecubebolton/"
                aria-label="Instagram"
              >
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="#" aria-label="TikTok">
                <img src={TiktokIcon} alt="TikTok" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <button className="border-2 border-accent bg-black/35 text-text-light font-bold px-4 py-2 rounded-lg flex items-center justify-between gap-3 w-full max-w-[220px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,153,0,0.5)] hover:bg-accent/20">
                BOOK A ROOM <img src={ArrowIcon} alt="" />
              </button>
              <button className="border-2 border-text-light bg-black/35 text-text-light font-bold px-4 py-2 rounded-lg flex items-center justify-between gap-3 w-full max-w-[220px] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-white/10">
                ARRANGE A VIEWING <img src={ArrowIcon} alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-text-light text-sm ">
          <p>© 2025 Brand name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
