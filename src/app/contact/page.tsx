'use client'
import { Meteors } from "../components/ui/meteors";

function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Full-screen meteors */}
      <Meteors number={70} className="fixed inset-0 z-0" />

      {/* Content above meteors */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="py-12 text-center">
          <h1 className="text-white text-3xl sm:text-3xl md:text-5xl lg:text-7xl py-10 font-bold">
            Contact Us
          </h1>
          <p className="text-sm sm:text-sm text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Have questions or need support? We’d love to hear from you. Reach out
            to us via email or phone, and our team will get back to you as soon as
            possible.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-lg flex justify-center">
          <form className="flex flex-col space-y-4 items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-[350px] sm:w-[350px] md:w-[450px] lg:w-[600px] text-lg px-4 py-4 border border-gray-600 rounded-lg focus:ring-2 focus:outline-none text-white"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="text-white w-[350px] sm:w-[350px] md:w-[450px] lg:w-[600px] text-lg px-4 py-4 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#049f6b] focus:outline-none resize-none"
            />

            <button
              type="submit"
              className="py-2 px-3 bg-[#049f6b] text-white p-4 text-xl mt-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
