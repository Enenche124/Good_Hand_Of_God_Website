export default function Events() {
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "8:00 AM - 11:00 AM",
      description:
        "Join us for a powerful time of worship, prayer, and the Word. Experience God's presence as we gather together.",
      category: "Weekly",
      color: "bg-primary-red",
    },
    {
      title: "Tuesday Bible Study",
      date: "Every Tuesday",
      time: "6:00 PM - 7:30 PM",
      description:
        "Dive deeper into God's Word with interactive Bible study sessions. Grow in knowledge and understanding of Scripture.",
      category: "Weekly",
      color: "bg-primary-blue",
    },
    {
      title: "Wednesday Prayer Meeting",
      date: "Every Wednesday",
      time: "6:00 PM - 7:00 PM",
      description:
        "A dedicated time for corporate prayer, intercession, and seeking God's face together as a church family.",
      category: "Weekly",
      color: "bg-purple-600",
    },
    {
      title: "Friday Counseling Session",
      date: "Every Friday",
      time: "10:00 AM - 2:00 PM",
      description:
        "Personal and family counseling sessions with our pastoral team. Get spiritual guidance and support.",
      category: "Weekly",
      color: "bg-green-600",
    },
    {
      title: "Monthly Miracle Service",
      date: "First Sunday of Every Month",
      time: "8:00 AM - 12:00 PM",
      description:
        "An extended service with powerful worship, testimonies, healing, and breakthrough prayers.",
      category: "Monthly",
      color: "bg-yellow-600",
    },
    {
      title: "Youth Praise Night",
      date: "Last Friday of Every Month",
      time: "6:00 PM - 9:00 PM",
      description:
        "An energetic night of worship, fellowship, and ministry specifically for young people.",
      category: "Monthly",
      color: "bg-indigo-600",
    },
  ];

  const specialEvents = [
    {
      title: "Annual Convention",
      date: "Coming Soon",
      description:
        "Our annual church convention with special guest ministers, workshops, and powerful ministry sessions.",
    },
    {
      title: "Easter Celebration",
      date: "April",
      description:
        "Celebrating the resurrection of our Lord Jesus Christ with special services and activities.",
    },
    {
      title: "Christmas Celebration",
      date: "December",
      description:
        "Rejoicing in the birth of our Savior with carol services, drama presentations, and community outreach.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Events & Calendar</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join us for worship, fellowship, and life-changing experiences
          </p>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
            Regular Schedule
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
              >
                <div className={`${event.color} px-6 py-3`}>
                  <span className="text-white font-semibold text-sm">
                    {event.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
            Special Events
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800 text-center">
                  {event.title}
                </h3>
                <p className="text-primary-red font-semibold text-center mb-3">
                  {event.date}
                </p>
                <p className="text-gray-600 text-center leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Visit Us
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <div className="flex items-start justify-center gap-3 mb-4">
                <svg
                  className="w-6 h-6 text-primary-red mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-lg text-gray-800 font-semibold">
                    Ever Great International Schools
                  </p>
                  <p className="text-gray-600">
                    Opposite Loyola Jesuit College
                  </p>
                  <p className="text-gray-600">Gidan Mangoro, FCT Abuja</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              We're easy to find! All are welcome to join us for any of our
              services.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-red text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
