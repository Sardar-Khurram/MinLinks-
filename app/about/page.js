"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-green-100 font-serif p-6">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center text-center gap-6 py-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-green-900">
          About <span className="text-green-600">MinLinks</span>
        </h1>
        <p className="text-lg lg:text-xl max-w-4xl text-gray-700">
          MinLinks is your ultimate companion for simplifying URLs. We aim to
          provide a seamless, fast, and reliable URL shortening experience
          powered by cutting-edge technology and user-centric design. Whether
          you&apos;re managing personal links or enterprise-scale operations, we
          have got you covered!
        </p>
      </section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 gap-10 items-center justify-center flex-col lg:flex-row max-w-6xl mx-auto py-16"
      >
        {/* Text Content */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-green-900">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
            At MinLinks, our mission is to simplify your online interactions by
            shortening and managing your URLs effortlessly. We are dedicated to
            empowering users with tools that save time, reduce hassle, and
            provide insights.
          </p>
        </div>

        {/* Animated Image */}
        <motion.img
          src="/mission.jpg"
          alt="Our Mission"
          className=" mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </motion.section>

      {/* Features Section */}
      <section className="bg-green-200 py-16 px-6 rounded-xl shadow-md mt-10">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          Why Choose MinLinks?
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <Image
              src="/fast.jpg"
              alt="Fast"
              className="h-16"
            />
            <h3 className="text-xl font-bold text-green-800">Fast & Reliable</h3>
            <p className="text-gray-700 text-center">
              Experience lightning-fast link generation and reliable services
              designed to handle any volume of traffic.
            </p>
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <Image
              src="/secure.jpg"
              alt="Secure"
              className="h-16"
            />
            <h3 className="text-xl font-bold text-green-800">Secure</h3>
            <p className="text-gray-700 text-center">
              Your data privacy is our priority. We ensure robust security
              measures to protect your links.
            </p>
          </motion.div>
          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <Image
              src="/analytics.jpg"
              alt="Analytics"
              className="h-16 w-16"
            />
            <h3 className="text-xl font-bold text-green-800">Analytics</h3>
            <p className="text-gray-700 text-center">
              Gain valuable insights into link performance with detailed
              analytics for better decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center gap-6 mt-20"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-green-900">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-700 max-w-xl">
          Start shortening your URLs today with MinLinks and enjoy a seamless
          browsing experience!
        </p>
        <button className="bg-green-500 px-8 py-3 text-xl text-white rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300">
          <Link href="/generate">Generate Now</Link>
        </button>
      </motion.section>
    </div>
  );
};

export default AboutPage;

