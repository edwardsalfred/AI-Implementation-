
import React from 'react';

const TermsOfService: React.FC = () => {
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
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8 pb-4 border-b">Last Updated: 06/29/2024</p>

        <div className="prose prose-blue prose-lg text-gray-700 space-y-8 max-w-none">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-blue-900 font-medium leading-relaxed">
            PLEASE READ THE FOLLOWING TERMS OF SERVICE AGREEMENT CAREFULLY. BY ACCESSING OR USING OUR WEBSITE (THE “SITE”) OR OUR SERVICES, YOU HEREBY AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS AND ALL TERMS INCORPORATED HEREIN BY REFERENCE.
          </div>

          <section>
            <p>
              The present terms and conditions (this “Agreement” or “Terms”) is a legal agreement between you and Chatbot Boy (hereinafter “Chatbot Boy”), a company duly organized and validly existing, located at 3139 W Holcombe Blvd A267, Houston, Texas 77025.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">OVERVIEW</h2>
            <p>The Site (chatbotboy.ai) is operated by Chatbot Boy. Throughout the Site, the terms “we”, “us” and “our” refer to Chatbot Boy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SECTION 1 – GENERAL TERMS</h2>
            <p>By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence.</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p>Mailing Address:<br />
            Chatbot Boy<br />
            3139 W Holcombe Blvd A267<br />
            Houston, Texas 77025</p>
            <p className="mt-2">Telephone: 6014545763</p>
            <p className="mt-2">Email: info@chatbotboy.ai</p>
          </section>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8 px-4 text-center text-sm text-gray-500">
        <p>© 2026 Chatbot Boy AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;