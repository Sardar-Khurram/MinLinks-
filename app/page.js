import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="bg-gray-100 ">
      {/* Hero Section */}
      <section className="relative z-50 w-full flex flex-col items-center justify-center text-center py-16 bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fadeInDown">
          Welcome to MinLinks
        </h1>
        <p className="text-lg lg:text-2xl mb-8 max-w-2xl">
          The most efficient URL shortener in the market. Shorten links and simplify browsing with just one click.
        </p>
        <div className="flex gap-4">
          <Link href="/generate">
            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform">
              Start
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform">
              Github
            </button>
          </Link>
        </div>
        <div className="absolute top-12 w-full flex justify-center opacity-35 rounded-full ">
          <Image
            src="/working.jpg" // Replace with your custom illustration
            alt="Hero Illustration"
            height={180}
            width={180}
            className="animate-bounce rounded-full"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MinLinks?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transition-transform">
            <Image
              src="/fast.jpg"
              alt="Fast"
              height={100}
              width={100}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Fast and Reliable</h3>
            <p>Shorten your links in seconds and experience lightning-fast redirects.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transition-transform">
            <Image
              src="/analytics.jpg"
              alt="Easy"
              height={100}
              width={100}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p>Our intuitive interface makes shortening links hassle-free for everyone.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 hover:shadow-xl transition-transform">
            <Image
              src="/secure.jpg"
              alt="Secure"
              height={100}
              width={100}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Secure and Private</h3>
            <p>Your data is safe with us. We prioritize security and privacy.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-tr from-green-500 to-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Shortening Today!</h2>
        <p className="text-lg mb-8">
          Join thousands of users and make your links more accessible and manageable.
        </p>
        <Link href="/generate">
          <button className="bg-white text-green-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform">
            Get Started Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">&copy; 2024 MinLinks. All Rights Reserved.</p>
          <p className="text-sm">
            Designed with ❤️ by{" "}
            <Link href="https://github.com" target="_blank">
              <span className="underline hover:text-green-400 transition-colors">
                Sardar Khurram
              </span>
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
