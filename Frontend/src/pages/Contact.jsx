import React from "react";

const Contact = () => {
  const goldColor = '#FFAA4C';
  const blueColor = '#22ABDF';

  return (
    // Use a very light gold for the background
    <section className="bg-orange-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: blueColor }} // Primary Blue Header
        >
          Get in Touch
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We'd love to connect with you! Whether you want to join a session,
          seek guidance, or simply reach out — send us a message below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <form className="space-y-6">
          {/* Name */}
          <div className="text-left">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              // Updated focus ring to use the Blue brand color
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
            />
          </div>

          {/* Email */}
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@email.com"
              // Updated focus ring to use the Blue brand color
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
            />
          </div>

          {/* Phone Number */}
          <div className="text-left">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 9876543210"
              // Updated focus ring to use the Blue brand color
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
            />
          </div>

          {/* Message */}
          <div className="text-left">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Write your message..."
              // Updated focus ring to use the Blue brand color
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white py-3 rounded-xl font-semibold transition-all duration-300"
            // Button color is Primary Blue, hover color is a slightly darker Blue
            style={{ backgroundColor: blueColor, '--tw-bg-opacity': 1, ':hover': { backgroundColor: '#1A89B6' } }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;