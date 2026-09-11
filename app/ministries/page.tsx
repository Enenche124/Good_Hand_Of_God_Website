export default function Ministries() {
  const ministries = [
    {
      title: "Children's Ministry",
      description:
        "Nurturing the next generation with age-appropriate teaching, worship, and activities that help children know and love Jesus from an early age.",
      icon: "👶",
      color: "bg-yellow-500",
    },
    {
      title: "Youth Ministry",
      description:
        "Empowering young people to live boldly for Christ through discipleship, mentorship, and creating a community where they can grow in faith together.",
      icon: "🎯",
      color: "bg-green-500",
    },
    {
      title: "Women's Ministry",
      description:
        "Building strong, godly women through fellowship, prayer, Bible study, and mutual support in their faith journey and life challenges.",
      icon: "👩",
      color: "bg-pink-500",
    },
    {
      title: "Men's Ministry",
      description:
        "Equipping men to be spiritual leaders in their homes, workplaces, and communities through accountability, prayer, and biblical teaching.",
      icon: "👨",
      color: "bg-blue-600",
    },
    {
      title: "Evangelism & Outreach",
      description:
        "Reaching the lost with the gospel through community outreach, crusades, visitations, and partnership with local organizations.",
      icon: "📢",
      color: "bg-primary-red",
    },
    {
      title: "Worship Ministry",
      description:
        "Leading the congregation into authentic worship through music, song, and creating an atmosphere for God's presence.",
      icon: "🎵",
      color: "bg-purple-500",
    },
    {
      title: "Prayer Ministry",
      description:
        "Interceding for the church, community, and nations. We believe in the power of prayer to transform lives and situations.",
      icon: "🙏",
      color: "bg-primary-blue",
    },
    {
      title: "Counseling & Care",
      description:
        "Providing pastoral care, spiritual counseling, and support for individuals and families facing life challenges.",
      icon: "💬",
      color: "bg-teal-500",
    },
    {
      title: "Media Ministry",
      description:
        "Extending our reach through digital platforms, recording sermons, live streaming services, and managing our online presence.",
      icon: "📹",
      color: "bg-indigo-500",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Ministries</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Serving God and building His kingdom through diverse ministries that
            touch every aspect of life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Get Involved
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At The Good Hand of God International Gospel Ministry Centre, we
              believe every member has a part to play in God's kingdom. Our
              ministries provide opportunities for you to use your gifts,
              talents, and calling to serve God and impact lives. Find where you
              belong and join us in making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
              >
                <div className={`${ministry.color} p-6 text-center`}>
                  <span className="text-6xl">{ministry.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {ministry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {ministry.description}
                  </p>
                  <button className="text-primary-red font-semibold hover:text-red-700 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Ready to Serve?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're passionate about worship, teaching, outreach, or
              hospitality, there's a place for you in our ministry. Contact us
              to learn more about how you can get involved.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-red text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
