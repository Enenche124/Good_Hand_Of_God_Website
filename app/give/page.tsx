export default function Give() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Give</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Partner with us in spreading the gospel and transforming lives
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Why We Give
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Giving is an act of worship and obedience to God. Through your
              generous contributions, we are able to preach the gospel, support
              missions, care for those in need, and maintain the ministry that
              reaches thousands.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              "Each of you should give what you have decided in your heart to
              give, not reluctantly or under compulsion, for God loves a
              cheerful giver." - 2 Corinthians 9:7
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
            Ways to Give
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bank Transfer */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                Bank Transfer
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Transfer your offerings and tithes directly to our church
                account
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Bank Name:</span> [Your Bank
                  Name]
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Account Name:</span> The Good
                  Hand of God International Gospel Ministry Centre
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Account Number:</span> [Your
                  Account Number]
                </p>
              </div>
            </div>

            {/* Mobile Money */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                Mobile Money
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Give conveniently using your mobile money service
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Phone:</span> 09039301039
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Name:</span> Apostle Oyiagaba
                  Peter Obida
                </p>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Supported: MTN, Airtel, Glo, 9mobile
              </p>
            </div>

            {/* In-Person */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                Give In Person
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Bring your offerings during any of our services
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="text-gray-700 text-center mb-3">
                  <span className="font-semibold">Service Times:</span>
                </p>
                <p className="text-gray-600 text-center text-sm">
                  Sunday: 8:00 AM - 11:00 AM
                  <br />
                  Tuesday: 6:00 PM - 7:30 PM
                  <br />
                  Wednesday: 6:00 PM - 7:00 PM
                  <br />
                  Friday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Your Gift Supports */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
            What Your Gift Supports
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
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
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Gospel Outreach
                </h3>
                <p className="text-gray-600">
                  Supporting evangelism efforts, crusades, and mission work to
                  reach the lost with the message of Jesus Christ.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Ministry Operations
                </h3>
                <p className="text-gray-600">
                  Maintaining the church facility, utilities, equipment, and
                  resources needed for effective ministry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
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
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Community Service
                </h3>
                <p className="text-gray-600">
                  Supporting the less privileged, widows, orphans, and providing
                  humanitarian aid to those in need.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Discipleship Programs
                </h3>
                <p className="text-gray-600">
                  Training and equipping believers through Bible studies,
                  leadership development, and ministry programs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Worship & Media
                </h3>
                <p className="text-gray-600">
                  Enhancing worship experiences, recording sermons, and
                  expanding our digital reach to touch more lives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Global Missions
                </h3>
                <p className="text-gray-600">
                  Partnering with missionaries and supporting church plants in
                  other regions and nations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary-red text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-white opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed italic">
              "Honor the LORD with your wealth, with the firstfruits of all your
              crops; then your barns will be filled to overflowing, and your
              vats will brim over with new wine."
            </p>
            <p className="text-lg font-semibold">Proverbs 3:9-10</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Is my giving tax-deductible?
              </h3>
              <p className="text-gray-600">
                As a registered religious organization, your contributions may
                be tax-deductible. Please consult with your tax advisor for
                specific guidance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Can I set up recurring giving?
              </h3>
              <p className="text-gray-600">
                Yes! You can set up automatic bank transfers or mobile money
                payments to give regularly. Contact us for assistance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                How is my donation used?
              </h3>
              <p className="text-gray-600">
                All donations are used for ministry activities, outreach, church
                operations, and supporting our mission. We maintain transparency
                and accountability in all financial matters.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Can I give anonymously?
              </h3>
              <p className="text-gray-600">
                Absolutely. Your privacy is respected, and you can give without
                providing your name if you prefer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Thank You for Your Generosity
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your partnership makes it possible for us to continue impacting
              lives and spreading the gospel. May God bless you abundantly as
              you give cheerfully unto Him.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-red text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Contact Us for More Information
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
