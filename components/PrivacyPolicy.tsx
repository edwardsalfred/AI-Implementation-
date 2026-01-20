import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const logoUrl = "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/chatbot-boy-logo.png";

  return (
    <div className="min-h-screen bg-white">
      <header className="py-4 px-4 sm:px-8 border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.hash = ''}>
            <img src={logoUrl} alt="Chatbot Boy AI Logo" className="h-10 w-auto object-contain" />
            <span className="text-lg font-bold text-gray-800">Chatbot Boy AI</span>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition">Back to Home</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 sm:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 border-b pb-4">Privacy Policy</h1>
        <div className="prose prose-blue prose-lg text-gray-700 max-w-none">
          <section>
            <h2>Who we are</h2>
            <p>Our website address is: <a href="https://chatbotboy.ai">https://chatbotboy.ai</a>.</p>
          </section>

          <section>
            <h2>Comments</h2>
            <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
            <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
          </section>

          <section>
            <h2>Media</h2>
            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
            <p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
            <p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks.</p>
          </section>

          <section>
            <h2>Embedded content from other websites</h2>
            <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
            <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content.</p>
          </section>

          <section>
            <h2>Who we share your data with</h2>
            <p>If you request a password reset, your IP address will be included in the reset email.</p>
          </section>

          <section>
            <h2>How long we retain your data</h2>
            <p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically.</p>
            <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time.</p>
          </section>

          <section>
            <h2>What rights you have over your data</h2>
            <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
          </section>

          <section>
            <h2>Where your data is sent</h2>
            <p>Visitor comments may be checked through an automated spam detection service.</p>
          </section>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4 text-center text-sm text-gray-500">
        <p>© 2026 Chatbot Boy AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;