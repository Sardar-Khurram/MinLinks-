"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 bg-green-200 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-green-900 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          We&apos;d love to hear from you! Please fill out the form below, and we&apos;ll
          get back to you as soon as possible.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name Input */}
          <div className="flex flex-col col-span-1">
            <label htmlFor="name" className="text-green-700 font-semibold">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col col-span-1">
            <label htmlFor="email" className="text-green-700 font-semibold">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label htmlFor="message" className="text-green-700 font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="mt-2 px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className={`px-8 py-3 rounded-lg text-white font-bold text-lg transition-all duration-300 ${
                isSubmitting
                  ? "bg-green-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600 hover:scale-105"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
