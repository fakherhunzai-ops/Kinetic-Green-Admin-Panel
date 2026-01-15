
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-teal-700 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img 
              src="https://static.readdy.ai/image/132b3ff08a1eac4781e862f34043ff3b/abb684f8070d52f6482568aad0831f3b.png" 
              alt="Kinetic Green" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm text-teal-100 mb-6">
              Leading the electric vehicle revolution in India with sustainable, innovative mobility solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="/vehicles?category=Motorcycles" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">Motorcycles</a></li>
              <li><a href="/vehicles?category=Scooters" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">Scooters</a></li>
              <li><a href="/vehicles?category=Electric" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">Electric Rickshaws</a></li>
              <li><a href="/vehicles?category=Mopeds" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">Mopeds</a></li>
              <li><a href="/vehicles?category=Three Wheelers" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">Three Wheelers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="/dealers" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">Find Dealers</a></li>
              <li><a href="/news" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">News & Media</a></li>
              <li><a href="/careers" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="/contact" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
            </ul>
          </div>

          <div id="contact">
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-xl mt-1"></i>
                <span className="text-sm text-teal-100">
                  Kinetic House, Mumbai - 400001, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-xl"></i>
                <a href="tel:+911234567890" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-xl"></i>
                <a href="mailto:info@kineticgreen.com" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer">
                  info@kineticgreen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-teal-100">
              © 2024 Kinetic Green. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                Terms of Service
              </a>
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-100 hover:text-white transition-colors cursor-pointer whitespace-nowrap">
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
