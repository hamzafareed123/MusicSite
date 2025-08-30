function Footer() {
  return (
    <div className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 px-6 lg:gap-30">
        <div>
          <h1 className="text-white text-lg font-bold mb-4">About Us</h1>
          <p className="text-sm leading-relaxed">
            Master the Ark of Music – Your ultimate playground for learning,
            creating, and sharing music. From beginner riffs to pro-level
            tracks, we’ve got you covered.
          </p>
        </div>

        <div>
          <h1 className="text-white text-lg font-bold mb-4">Quick Links</h1>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-white text-lg font-bold mb-4">Follow Us</h1>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:text-white"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:text-white"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-white text-lg font-bold mb-4">Contact Us</h1>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:info@company.com" className="hover:text-white">
                info@company.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+123456789" className="hover:text-white">
                +92 333444457
              </a>
            </li>
            <li>Address: 123 Street, Tech City</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Design by Hamza Fareed
      </div>
    </div>
  );
}

export default Footer;
