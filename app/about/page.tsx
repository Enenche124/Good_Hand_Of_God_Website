export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">
            Know more about The Good Hand of God International Gospel Ministry
            Centre
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              The Good Hand of God International Gospel Ministry Centre is a
              vibrant, Spirit-filled church committed to advancing the Kingdom
              of God through the preaching of the gospel, discipleship, and
              community transformation. Founded on the unchanging Word of God,
              we believe in the power of faith, prayer, and God's divine
              presence to transform lives.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Our ministry exists to see souls saved, believers equipped, and
              communities impacted by the love and power of Jesus Christ. We are
              dedicated to creating an atmosphere where every individual can
              encounter God's presence, grow in their faith, and discover their
              God-given purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Our Leader */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
              Our Leader
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-4 shadow-lg">
                  <img
                    src="/images/Good_hand_img.png"
                    alt="The Good Hand of God Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    Apostle Oyiagaba Peter Obida
                  </h3>
                  <p className="text-xl text-primary-red mb-4">
                    Senior Pastor & Founder
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Apostle Oyiagaba Peter Obida is a man of God with a burning
                    passion for souls and a deep commitment to the Word of God.
                    Called and anointed to preach the gospel with power and
                    demonstration of the Holy Spirit, he leads with humility,
                    wisdom, and compassion.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Under his leadership, The Good Hand of God International
                    Gospel Ministry Centre has become a beacon of hope and
                    transformation in the community, touching lives through
                    powerful teachings, prayer, and pastoral care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-gradient-to-br from-primary-red to-red-700 text-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To spread the gospel of Jesus Christ to all nations, making
                  disciples, demonstrating God's love through word and action,
                  and establishing believers in faith, righteousness, and the
                  knowledge of God's Word.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-primary-blue to-blue-700 text-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-primary-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To raise a generation of Spirit-filled believers who walk in
                  divine purpose, impact their communities, and manifest God's
                  glory in every sphere of life. To see nations transformed by
                  the power of the gospel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
            Our Core Values
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                Word-Centered
              </h3>
              <p className="text-gray-600 text-center">
                We believe in the authority and sufficiency of God's Word for
                life and godliness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                Spirit-Led
              </h3>
              <p className="text-gray-600 text-center">
                We rely on the Holy Spirit's guidance, power, and presence in
                all we do.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                Community-Focused
              </h3>
              <p className="text-gray-600 text-center">
                We are committed to fellowship, unity, and supporting one
                another in love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
              What We Believe
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-gray-600 text-lg">
                  We believe in the Holy Trinity: God the Father, God the Son
                  (Jesus Christ), and God the Holy Spirit.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-gray-600 text-lg">
                  We believe in salvation through faith in Jesus Christ alone.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-gray-600 text-lg">
                  We believe the Bible is the inspired, inerrant Word of God.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-gray-600 text-lg">
                  We believe in the power of prayer and the operation of
                  spiritual gifts.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-gray-600 text-lg">
                  We believe in the Great Commission to make disciples of all
                  nations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
