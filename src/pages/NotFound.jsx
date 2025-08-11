import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* 404 Content */}
      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Sorry, the page you're looking for doesn't exist or is currently
              under development.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-gray-200">
              Looking for something specific?
            </h3>
            <p className="text-gray-400 mb-4">
              Some pages might still be under construction. Check back soon or
              contact us if you need help.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                to="/"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                to="/events"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors"
              >
                Events
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-sm transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
