"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src="/images/Good_hand_img.png"
                alt="The Good Hand of God Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-red">
                The Good Hand of God
              </h1>
              <p className="text-xs text-gray-600">
                International Gospel Ministry Centre
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-red transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-red transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/ministries"
                className="text-gray-700 hover:text-primary-red transition"
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="text-gray-700 hover:text-primary-red transition"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/sermons"
                className="text-gray-700 hover:text-primary-red transition"
              >
                Sermons
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary-red transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/give"
                className="text-white px-6 py-2 rounded-full transition"
                style={{ backgroundColor: '#DC2626' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DC2626'}
              >
                Give
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3 pb-4">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-primary-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-primary-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/ministries"
                className="block text-gray-700 hover:text-primary-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="block text-gray-700 hover:text-primary-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/sermons"
                className="block text-gray-700 hover:text-primary-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Sermons
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-primary-red transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/give"
                className="block text-white px-6 py-2 rounded-full transition text-center"
                style={{ backgroundColor: '#DC2626' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Give
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
