import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-red">
              The Good Hand of God
            </h3>
            <p className="text-gray-400 text-sm">
              International Gospel Ministry Centre spreading the gospel and
              transforming lives through the power of God.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/ministries"
                  className="hover:text-white transition"
                >
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-white transition">
                  Sermons
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Times</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Sunday: 8:00 AM - 11:00 AM</li>
              <li>Tuesday: 6:00 PM - 7:30 PM (Bible Study)</li>
              <li>Wednesday: 6:00 PM - 7:00 PM (Prayer)</li>
              <li>Friday: 10:00 AM - 2:00 PM (Counseling)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:oyiagabapeter1994@gmail.com"
                  className="hover:text-white transition"
                >
                  oyiagabapeter1994@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2349039301039" className="hover:text-white transition">
                  09039301039
                </a>
              </li>
              <li>
                <a href="tel:+2348057780262" className="hover:text-white transition">
                  08057780262
                </a>
              </li>
              <li className="pt-2">
                Ever Great International Schools
                <br />
                Opposite Loyola Jesuit College
                <br />
                Gidan Mangoro, FCT Abuja
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} The Good Hand of God International
            Gospel Ministry Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
