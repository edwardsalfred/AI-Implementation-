import React from 'react';

const TermsOfService: React.FC = () => {
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
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8 pb-4 border-b">Last Updated: 06/29/2024</p>

        <div className="prose prose-blue prose-lg text-gray-700 max-w-none space-y-8">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-blue-900 font-medium leading-relaxed">
            PLEASE READ THE FOLLOWING TERMS OF SERVICE AGREEMENT CAREFULLY...
          </div>

          <p>This Agreement is a legal agreement between you and Chatbot Boy, located at 3139 W Holcombe Blvd A267, Houston, Texas 77025.</p>

          <section><h2>OVERVIEW</h2><p>The Site (chatbotboy.ai) is operated by Chatbot Boy. Throughout the Site, the terms “we”, “us” and “our” refer to Chatbot Boy.</p></section>
          <section><h2>SECTION 1 – GENERAL TERMS</h2><p>By agreeing to these Terms, you represent that you are at least the age of majority in your state...</p></section>
          <section><h2>SECTION 2 – CREATING AN ACCOUNT</h2><p>Once you create an account with us, you are registered on the Site...</p></section>
          <section><h2>SECTION 3 – CONDUCT</h2><p>As a user or member of the Site, you herein acknowledge that all information is the expressed sole responsibility of the individual from whom the content originated.</p></section>
          <section><h2>SECTION 4 – GLOBAL USE; EXPORT/IMPORT COMPLIANCE</h2><p>You agree to comply with all local rules relating to online conduct and acceptable content.</p></section>
          <section><h2>SECTION 5 – SUBMITTED CONTENT</h2><p>Chatbot Boy shall not lay claim to ownership of any content submitted by any visitor.</p></section>
          <section><h2>SECTION 6 – INDEMNITY</h2><p>All users agree to insure and hold Chatbot Boy blameless or not liable for any claim or demand.</p></section>
          <section><h2>SECTION 7 – COMMERCIAL REUSE OF SERVICES</h2><p>You agree not to replicate, duplicate, or copy any part of the service.</p></section>
          <section><h2>SECTION 8 – MODIFICATIONS</h2><p>Chatbot Boy reserves the right to modify or discontinue the service.</p></section>
          <section><h2>SECTION 9 – TERMINATION</h2><p>As a member, you agree that Chatbot Boy may immediately suspend or terminate your account for cause.</p></section>
          <section><h2>SECTION 10 – LINKS</h2><p>We are not responsible for external sites or resources.</p></section>
          <section><h2>SECTION 11 – PROPRIETARY RIGHTS</h2><p>You acknowledge that Chatbot Boy’s Services contain proprietary material.</p></section>
          <section><h2>SECTION 12 – WARRANTY DISCLAIMERS</h2><p>Our Services are provided on an “AS IS” and “AS AVAILABLE” basis.</p></section>
          <section><h2>SECTION 13 – LIMITATION OF LIABILITY</h2><p>Chatbot Boy shall not be liable for any indirect, incidental, or special damages.</p></section>
          <section><h2>SECTION 14 – RELEASE</h2><p>You agree to release Chatbot Boy from claims arising from disputes.</p></section>
          <section><h2>SECTION 15 – NOTICE</h2><p>Notices may be furnished via email or regular mail.</p></section>
          <section><h2>SECTION 16 – INTELLECTUAL PROPERTY RIGHTS</h2><p>All trademarks and logos remain the property of Chatbot Boy.</p></section>
          <section><h2>SECTION 17 – ENTIRE AGREEMENT</h2><p>This constitutes the entire agreement between you and Chatbot Boy.</p></section>
          <section><h2>SECTION 18 – CHOICE OF LAW AND FORUM</h2><p>Governed by the laws of the state of Texas.</p></section>
          <section><h2>SECTION 19 – WAIVER AND SEVERABILITY OF TERMS</h2><p>Failure to exercise a right does not constitute a waiver.</p></section>
          <section><h2>SECTION 20 – NO RIGHT OF SURVIVORSHIP</h2><p>Your account is non-transferable.</p></section>
          <section><h2>SECTION 21 – STATUTE OF LIMITATIONS</h2><p>Claims must be filed within 1 year.</p></section>
          <section><h2>SECTION 22 – VIOLATIONS</h2><p>Report violations to info@chatbotboy.ai.</p></section>
          <section><h2>SECTION 23 – GOVERNMENT REQUESTS</h2><p>We may disclose information to cooperate with government requests.</p></section>
          <section><h2>SECTION 24 – FOREIGN ACCESS OF SITE</h2><p>Controlled and operated from our offices within the USA.</p></section>
          <section><h2>SECTION 25 – ERRORS, INACCURACIES AND OMISSIONS</h2><p>We reserve the right to correct errors and inaccuracies.</p></section>
          <section><h2>SECTION 26 – PRIVACY POLICY</h2><p>Personal information is protected by our Online Privacy Policy.</p></section>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4 text-center text-sm text-gray-500">
        <p>© 2026 Chatbot Boy AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;