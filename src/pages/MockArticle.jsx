import React from 'react';
import Header from '../components/Header';

const MockArticle = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      {/* Hero Section */}
      <div className="mx-12">
        <h1 className="text-4xl font-bold text-gray-800 my-2">
          Tech Fresh Graduate With Years of Experience
        </h1>
        <p className="text-gray-600 text-sm my-4">
          By Sam Harold · 20 September 2025
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Explore how fresh graduates are entering the tech industry with more
          than just degrees — they're packing portfolios, GitHub contributions,
          and real-world project experience.
        </p>
      </div>

      {/* Article Body */}
      <div className="space-y-6 text-gray-800 leading-relaxed mx-12">
        <p>
          The tech industry is witnessing a paradigm shift. Fresh graduates are
          no longer just beginners—they’re often seasoned developers before they
          even walk across the graduation stage. This change is driven by the
          democratization of knowledge, open-source contributions, internships,
          and student-led software projects.
        </p>

        <p>
          At this upcoming workshop organized by the FOIT Student Society,
          industry veterans and recruiters from top companies will share how
          they assess technical skills beyond GPA. Topics include:
        </p>

        <ul className="list-disc pl-6 text-gray-700">
          <li>What tech recruiters look for in a graduate’s GitHub profile</li>
          <li>
            How to use freelancing and internships to build a real-world resume
          </li>
          <li>Building a developer brand with personal websites and blogs</li>
        </ul>

        <p>
          Whether you're a beginner in Year 1 or a soon-to-be graduate, this
          session aims to inspire and equip you with a realistic, practical
          roadmap to break into the industry prepared—not just certified.
        </p>

        <p>
          “It’s no longer about what you know, but how you apply it,” said one
          of the keynote speakers, a lead engineer from a regional tech unicorn.
          “Graduates today build startups while still in university. That's the
          new norm.”
        </p>

        <p>
          Participants will also get the opportunity to join our guided GitHub
          Project Showcase, mock interview sessions, and lightning resume
          reviews. The event wraps with networking sessions over pizza and iced
          matcha.
        </p>
      </div>

      {/* CTA */}
      <div className="mx-12">
        <a
          href="/coding-workshop"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Reserve Your Seat Now
        </a>
      </div>
    </div>
  );
};

export default MockArticle;
