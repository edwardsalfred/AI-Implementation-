
import React from 'react';
import { CheckCircleIcon, SparklesIcon, CalendarIcon } from './Icons';

interface ThankYouPageProps {
  email: string;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ email }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircleIcon className="w-12 h-12 text-green-600" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Information Received!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Great news! Our AI agents at <span className="font-semibold text-blue-600">Chatbot Boy AI</span> are currently analyzing your process. Expect your personalized 
          <span className="font-bold text-gray-800"> AI Implementation Roadmap</span> in your inbox within 3-5 minutes.
        </p>
        
        <div className="bg-blue-50 rounded-2xl p-6 mb-10 text-left border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2 flex items-center">
            <SparklesIcon className="w-5 h-5 mr-2" />
            Sent to:
          </h3>
          <p className="text-blue-800 font-semibold mb-4">{email}</p>
          <p className="text-sm text-blue-700">
            <strong>Tip:</strong> Don't see it? Check your spam folder or "Promotions" tab in the next few minutes.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-gray-500">Want to accelerate your results?</p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center space-x-3 w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <CalendarIcon className="w-5 h-5" />
            <span>Book a Discovery Call</span>
          </a>
          <p className="text-xs text-gray-400">
            Discuss implementation details with a Chatbot Boy AI expert.
          </p>
        </div>
      </div>
      
      <button 
        onClick={() => window.location.reload()}
        className="mt-8 text-sm text-gray-500 hover:text-blue-600 transition"
      >
        Back to Landing Page
      </button>
    </div>
  );
};

export default ThankYouPage;
