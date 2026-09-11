"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(to right, #1e3a8a, #DC2626, #1e3a8a)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden p-3">
                <img
                  src="/images/Good_hand_img.png"
                  alt="The Good Hand of God Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Good Hand of God
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 font-light">
              International Gospel Ministry Centre
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Experience the transforming power of God's love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                style={{ color: '#DC2626' }}
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white transition"
                style={{ 
                  '--hover-color': '#DC2626' 
                } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.color = '#DC2626'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Welcome to Our Ministry
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              We are a vibrant community of believers dedicated to spreading the
              gospel of Jesus Christ and demonstrating God's love through word
              and action. Under the leadership of Apostle Oyiagaba Peter Obida,
              we are committed to spiritual growth, community service, and
              kingdom advancement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're seeking spiritual guidance, fellowship, or simply a
              place to call home, you are welcome here. Come and experience the
              Good Hand of God in your life.
            </p>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Join Us for Worship
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Sunday Service */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                Sunday Service
              </h3>
              <p className="text-center text-gray-600 mb-2">Main Worship</p>
              <p className="text-center text-primary-red font-semibold">
                8:00 AM - 11:00 AM
              </p>
            </div>

            {/* Tuesday Bible Study */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                Tuesday
              </h3>
              <p className="text-center text-gray-600 mb-2">Bible Study</p>
              <p className="text-center text-primary-blue font-semibold">
                6:00 PM - 7:30 PM
              </p>
            </div>

            {/* Wednesday Prayer */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                Wednesday
              </h3>
              <p className="text-center text-gray-600 mb-2">Prayer Service</p>
              <p className="text-center text-primary-red font-semibold">
                6:00 PM - 7:00 PM
              </p>
            </div>

            {/* Friday Counseling */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                Friday
              </h3>
              <p className="text-center text-gray-600 mb-2">Counseling</p>
              <p className="text-center text-primary-blue font-semibold">
                10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience God's Presence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us this Sunday and discover the transforming power of worship,
            fellowship, and God's word.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-red px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/give"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-red transition"
            >
              Support Our Ministry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
