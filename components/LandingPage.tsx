
import React from 'react';
import LeadForm from './LeadForm';
import { CheckCircleIcon, SparklesIcon, ChartBarIcon, RocketLaunchIcon } from './Icons';

interface LandingPageProps {
  onSuccess: (email: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSuccess }) => {
  const logoUrl = "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/chatbot-boy-logo.png";

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="py-4 px-4 sm:px-8 max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logoUrl} alt="Chatbot Boy AI Logo" className="h-12 w-auto object-contain" />
          <span className="text-xl font-bold tracking-tight text-gray-800 hidden sm:inline">Chatbot Boy AI</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Free for a limited time</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Get Your Free <span className="text-blue-600">AI Implementation</span> Roadmap
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Discover how Chatbot Boy AI can automate your business processes. Get a custom analysis in 5 minutes—no sales call required. Join 500+ businesses optimizing with our intelligent solutions.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">Custom AI Automation Roadmap</p>
                <p className="text-sm text-gray-500">Tailored specifically to your manual workflows.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <p className="font-semibold text-gray-800">ROI Estimation & Tool Recommendations</p>
                <p className="text-sm text-gray-500">Know exactly how much time and money you'll save.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-100 relative overflow-hidden" id="form-section">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <RocketLaunchIcon className="w-24 h-24 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Analyze Your Process</h2>
          <LeadForm onSuccess={onSuccess} />
          <p className="mt-4 text-center text-xs text-gray-400">
            No credit card required. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Features/What you get Section */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What You'll Receive in Your Inbox</h2>
            <p className="mt-4 text-gray-600">Our AI Agents will analyze your data to provide a comprehensive report.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <ChartBarIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">ROI Estimation</h3>
              <p className="text-gray-600">Detailed breakdown of potential cost savings and efficiency gains.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <RocketLaunchIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Actionable Steps</h3>
              <p className="text-gray-600">A step-by-step implementation plan to go from manual to automated.</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <SparklesIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Tool Selection</h3>
              <p className="text-gray-600">Recommendations for the best AI tools (LLMs, n8n, Zapier) for your needs.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 text-white mb-4">
              <img src={logoUrl} alt="Chatbot Boy AI" className="h-10 w-auto brightness-110" />
              <span className="text-lg font-bold">Chatbot Boy AI</span>
            </div>
            <p className="text-sm max-w-xs mx-auto md:mx-0">Helping businesses unlock their potential through intelligent automation and Chatbot Boy AI expertise.</p>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="#terms-of-service" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact Us</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-xs text-center md:text-left">
          © 2026 Chatbot Boy AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;