
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const logoUrl = "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/chatbot-boy-logo.png";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 px-4 sm:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.hash = ''}>
            <img src={logoUrl} alt="Chatbot Boy AI Logo" className="h-10 w-auto object-contain" />
            <span className="text-lg font-bold text-gray-800">Chatbot Boy AI</span>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition">
            &larr; Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto py-12 px-6 sm:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">Privacy Policy</h1>

        <div className="prose prose-blue prose-lg text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we are</h2>
            <p>Our website address is: <a href="https://chatbotboy.ai" className="text-blue-600 hover:underline">https://chatbotboy.ai</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments</h2>
            <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Media</h2>
            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p>We use cookies to improve your experience. These cookies allow us to remember your preferences and provide personalized services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Embedded content from other websites</h2>
            <p>Articles on this site may include embedded content. Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we share your data with</h2>
            <p>We do not share your personal data with third parties except as required for service fulfillment or by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How long we retain your data</h2>
            <p>If you leave a comment, the comment and its metadata are retained indefinitely. For registered users, we store the personal information provided in their user profile.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What rights you have over your data</h2>
            <p>You can request an exported file of the personal data we hold about you or request that we erase any personal data we hold about you.</p>
          </section>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8 px-4 text-center text-sm text-gray-500">
        <p>© 2026 Chatbot Boy AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;