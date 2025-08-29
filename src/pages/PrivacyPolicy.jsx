import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection
        title="Privacy Policy"
        subtitle="Your privacy matters to us!"
      />

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Introduction
          </h2>
          <p className="text-gray-700 mb-6">
            At CreatioNeX, we are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our
            services. Please read this policy carefully. If you do not agree
            with the terms of this privacy policy, please do not access the
            site.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-6">
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, shipping address, email address,
              and telephone number, and demographic information, such as your
              age, gender, hometown, and interests, that you voluntarily give to
              us when you register with the Site or when you choose to
              participate in various activities related to the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Site, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Site.
            </li>
            <li>
              <strong>Financial Data:</strong> Financial information, such as
              data related to your payment method (e.g., valid credit card
              number, card brand, expiration date) that we may collect when you
              purchase, order, return, exchange, or request information about
              our services from the Site.
            </li>
            <li>
              <strong>Data From Social Networks:</strong> User information from
              social networking sites, such as Apple’s Game Center, Facebook,
              Google+, Instagram, Pinterest, Twitter, including your name, your
              social network username, location, gender, birth date, email
              address, profile picture, and public data for contacts, if you
              connect your account to such social networks.
            </li>
            <li>
              <strong>Mobile Device Data:</strong> Device information, such as
              your mobile device ID, model, and manufacturer, and information
              about the location of your device, if you access the Site from a
              mobile device.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Use of Your Information
          </h2>
          <p className="text-gray-700 mb-6">
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Create and manage your account.</li>
            <li>Process your transactions.</li>
            <li>Email you regarding your account or order.</li>
            <li>
              Fulfill and manage purchases, orders, payments, and other
              transactions related to the Site.
            </li>
            <li>
              Generate a personal profile about you to make future visits to the
              Site more personalized.
            </li>
            <li>Increase the efficiency and operation of the Site.</li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Site.
            </li>
            <li>Notify you of updates to the Site.</li>
            <li>
              Offer new products, services, and/or recommendations to you.
            </li>
            <li>Perform other business activities as needed.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Disclosure of Your Information
          </h2>
          <p className="text-gray-700 mb-6">
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to comply with the
              law, such as to comply with a subpoena, or similar legal process,
              and/or when we believe in good faith that disclosure is necessary
              to protect our rights, protect your safety or the safety of
              others, investigate fraud, or respond to a government request.
            </li>
            <li>
              <strong>Business Transfers:</strong> If we are involved in a
              merger, acquisition, or sale of all or a portion of our assets,
              you will be notified via email and/or a prominent notice on our
              Site of any change in ownership or uses of your personal
              information, as well as any choices you may have regarding your
              personal information.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              information with third parties that perform services for us or on
              our behalf, including payment processing, data analysis, email
              delivery, hosting services, customer service, and marketing
              assistance.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Security of Your Information
          </h2>
          <p className="text-gray-700 mb-6">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Policy for Children
          </h2>
          <p className="text-gray-700 mb-6">
            We do not knowingly solicit information from or market to children
            under the age of 13. If you become aware of any data we have
            collected from children under age 13, please contact us using the
            contact information provided below.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any
            changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have questions or comments about this Privacy Policy, please
            contact us at: legal@creationex.org
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

export default PrivacyPolicy;