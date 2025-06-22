import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white text-black py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-6xl font-bold leading-tight">
              We celebrate <br /> <span className="text-red-700">GAMING</span>{" "}
              and the
              <br />
              legends who play.
            </h2>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-md flex items-center justify-center hover:-translate-y-0.5 transition-all"
              >
                <FaFacebookF className="text-black text-[28px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md flex items-center justify-center hover:-translate-y-0.5 transition-all"
              >
                <FaInstagram className="text-black text-[28px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md flex items-center justify-center hover:-translate-y-0.5 transition-all"
              >
                <FaXTwitter className="text-black text-[28px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md flex items-center justify-center hover:-translate-y-0.5 transition-all"
              >
                <FaYoutube className="text-black text-[28px]" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md flex items-center justify-center hover:-translate-y-0.5 transition-all"
              >
                <FaSpotify className="text-black text-[28px]" />
              </a>
            </div>

            <div className="space-y-2">
             
              <div className="text-xl font-bold text-primary">Vyugam HQ</div>
              <div className="flex-grow h-px w-full bg-gray-300"></div>
              <div className="text-gray-400 text-sm">
                © 2025, Vyugam PVT LTD.
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-between items-start gap-10">
            {/* Link Grid Section */}
            <div className="grid grid-cols-4 gap-8 flex-1">
              {/* Community */}
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold mb-1">
                  Community
                </h4>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Reddit
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Twitch
                </a>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold mb-1">
                  Company
                </h4>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Press
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  News
                </a>
              </div>

              {/* Resources */}
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold mb-1">
                  Resources
                </h4>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Help
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Safety
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Privacy
                </a>
              </div>

              {/* Developers */}
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold mb-1">
                  Developers
                </h4>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  API
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  SDKs
                </a>
                <a
                  href="#"
                  className="block text-black text-sm hover:text-red-700 transition-colors"
                >
                  Tools
                </a>
              </div>
            </div>

            {/* 🎮 Emoji */}
            <div className="mt-56">
              <div className="text-9xl opacity-100 transform -rotate-12 hover:opacity-50 hover:-rotate-6 hover:scale-105 transition-all cursor-pointer">
                🎮
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
