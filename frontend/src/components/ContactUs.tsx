import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16">
      {/* Left Side: Contact Info */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Have any questions or need help? Fill out the form and our team will
          get back to you soon.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">support@bariq.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Phone</h4>
            <p className="text-gray-600">+20 123 456 7890</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Address</h4>
            <p className="text-gray-600">Cairo, Egypt</p>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <form
        className="bg-gray-50 shadow-lg rounded-2xl p-8 w-full lg:w-1/2 max-w-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message"
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
