import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection
        title="Terms of Service"
        subtitle="Please read these terms carefully."
      />

      {/* Terms of Service Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-6">
            By accessing or using our website and services, you agree to be
            bound by these Terms of Service ("Terms"). If you do not agree to
            these Terms, please do not use our services. We may modify these
            Terms at any time, and such modifications will be effective
            immediately upon posting the modified Terms on the site.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Use License</h2>
          <p className="text-gray-700 mb-6">
            Permission is granted to temporarily download one copy of the
            materials on CreatioNeX's website for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Modify or copy the materials;</li>
            <li>
              Use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              Attempt to decompile or reverse engineer any software contained on
              CreatioNeX's website;
            </li>
            <li>
              Remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              Transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ul>
          <p className="text-gray-700 mb-6">
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by [Your Company Name] at
            any time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            User Accounts
          </h2>
          <p className="text-gray-700 mb-6">
            To access certain features of our services, you may be required to
            create an account. You must provide accurate and complete
            information and keep your account information updated. You are
            solely responsible for the activity that occurs on your account, and
            you must keep your account password secure.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prohibited Activities
          </h2>
          <p className="text-gray-700 mb-6">
            You agree not to engage in any of the following prohibited
            activities:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              Copying, distributing, or disclosing any part of the services in
              any medium;
            </li>
            <li>
              Using any automated system, including without limitation "robots,"
              "spiders," "offline readers," etc., to access the services;
            </li>
            <li>
              Attempting to interfere with, compromise the system integrity or
              security or decipher any transmissions to or from the servers
              running the services;
            </li>
            <li>
              Taking any action that imposes, or may impose at our sole
              discretion an unreasonable or disproportionately large load on our
              infrastructure;
            </li>
            <li>
              Uploading invalid data, viruses, worms, or other software agents
              through the services;
            </li>
            <li>
              Collecting or harvesting any personally identifiable information,
              including account names, from the services;
            </li>
            <li>
              Using the services for any commercial solicitation purposes;
            </li>
            <li>
              Impersonating another person or otherwise misrepresenting your
              affiliation with a person or entity, conducting fraud, hiding or
              attempting to hide your identity;
            </li>
            <li>Interfering with the proper working of the services;</li>
            <li>
              Accessing any content on the services through any technology or
              means other than those provided or authorized by the services; or
            </li>
            <li>
              Bypassing the measures we may use to prevent or restrict access to
              the services, including without limitation features that prevent
              or restrict use or copying of any content or enforce limitations
              on use of the services or the content therein.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Intellectual Property
          </h2>
          <p className="text-gray-700 mb-6">
            The services and its original content, features, and functionality
            are and will remain the exclusive property of CreatioNeX and its
            licensors. The services are protected by copyright, trademark, and
            other laws of both the United States and foreign countries.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
          <p className="text-gray-700 mb-6">
            We may terminate or suspend your account and bar access to the
            services immediately, without prior notice or liability, under our
            sole discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of the Terms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Governing Law
          </h2>
          <p className="text-gray-700 mb-6">
            These Terms shall be governed and construed in accordance with the
            laws of Malaysia, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Changes to Terms
          </h2>
          <p className="text-gray-700 mb-6">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will provide
            at least 30 days notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole
            discretion.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about these Terms, please contact us at:
            legal@creationex.org
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-orange-500 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Be the first to know about new events! Subscribe to our email
            newsletters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-white/20 px-4 py-3 rounded-lg text-gray-50"
            />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
