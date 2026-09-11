"use client";

import { useState } from "react";

export default function Sermons() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Placeholder sermon data - add your YouTube video IDs here
  const sermons = [
    {
      title: "The Power of Faith",
      speaker: "Apostle Oyiagaba Peter Obida",
      date: "August 2026",
      category: "Sunday Service",
      description:
        "A powerful message on walking by faith and not by sight, trusting in God's promises even in difficult times.",
      videoId: "w5rtf8oK4ik", // Add your YouTube video ID here (e.g., "dQw4w9WgXcQ")
    },
    {
      title: "Walking in Divine Purpose",
      speaker: "Apostle Oyiagaba Peter Obida",
      date: "July 2026",
      category: "Sunday Service",
      description:
        "Discovering and fulfilling your God-given purpose in life and ministry.",
      videoId: "IggR7vrseu0", // Add your YouTube video ID here
    },
    {
      title: "The Ministry of the Holy Spirit",
      speaker: "Apostle Oyiagaba Peter Obida",
      date: "July 2026",
      category: "Bible Study",
      description:
        "Understanding the role and operations of the Holy Spirit in the life of every believer.",
      videoId: "", // Add your YouTube video ID here
    },
    {
      title: "Prayer That Moves Mountains",
      speaker: "Apostle Oyiagaba Peter Obida",
      date: "June 2026",
      category: "Prayer Meeting",
      description:
        "Learning the principles of effective, fervent prayer that produces results.",
      videoId: "", // Add your YouTube video ID here
    },
    {
      title: "Living a Life of Excellence",
      speaker: "Apostle Oyiagaba Peter Obida",
      date: "June 2026",
      category: "Sunday Service",
      description:
        "God's call for believers to excel in every area of life as a testimony of His glory.",
      videoId: "", // Add your YouTube video ID here
    },
    {
      title: "The Power of God's Word",
      speaker: "Apostle Oyiagaba Peter Obida",
      date: "May 2026",
      category: "Bible Study",
      description:
        "Exploring the transformative power of Scripture in our daily lives.",
      videoId: "", // Add your YouTube video ID here
    },
  ];

  const categories = [
    "All",
    "Sunday Service",
    "Bible Study",
    "Prayer Meeting",
    "Special Events",
  ];

  const filteredSermons =
    selectedCategory === "All"
      ? sermons
      : sermons.filter((sermon) => sermon.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Sermons</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Watch and listen to powerful messages from God's Word
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Couldn't make it to service? Want to revisit a message? Browse our
              collection of sermon recordings and be blessed by the Word of God.
              New sermons are added regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-[73px] z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? "bg-primary-red text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredSermons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSermons.map((sermon, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
                  >
                    {/* Video Player or Placeholder */}
                    {sermon.videoId ? (
                      // Show YouTube video if videoId exists
                      <div className="relative w-full h-48">
                        <iframe
                          src={`https://www.youtube.com/embed/${sermon.videoId}`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={sermon.title}
                        ></iframe>
                      </div>
                    ) : (
                      // Show placeholder if no videoId
                      <div className="h-48 flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(to bottom right, #DC2626, #1e3a8a)'
                        }}
                      >
                        <div className="text-center text-white">
                          <svg
                            className="w-16 h-16 mx-auto mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="text-sm">Video Coming Soon</p>
                        </div>
                      </div>
                    )}

                    {/* Sermon Info */}
                    <div className="p-6">
                      <span className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-3"
                        style={{ backgroundColor: '#1e3a8a' }}
                      >
                        {sermon.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {sermon.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {sermon.speaker}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {sermon.date}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {sermon.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No sermons found in this category yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Upload Instructions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 text-center">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Video Content Coming Soon
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We're in the process of uploading our sermon recordings. You can
              add your video files by:
            </p>
            <ul className="text-left text-gray-600 mt-4 space-y-2 max-w-2xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue mt-1">•</span>
                <span>
                  Uploading videos to YouTube and embedding them here
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue mt-1">•</span>
                <span>
                  Storing videos locally in the public folder and linking them
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue mt-1">•</span>
                <span>
                  Using a video hosting service like Vimeo or Cloudinary
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Listen On The Go
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our podcast to receive sermon audio automatically and
            listen anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
              Apple Podcasts
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Spotify
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              YouTube
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
