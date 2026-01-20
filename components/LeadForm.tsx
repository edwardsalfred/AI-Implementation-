import React, { useState } from 'react';

interface LeadFormProps {
  onSuccess: (email: string) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  businessProcess: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    businessProcess: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  const isFormValid = 
    formData.firstName.trim() !== '' && 
    formData.lastName.trim() !== '' && 
    isValidEmail(formData.email) && 
    formData.businessProcess.trim().length > 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://workflow.chatbotboy.ai/webhook/ai-implementation-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Chatbot Boy AI Landing Page',
          submittedAt: new Date().toISOString()
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      onSuccess(formData.email);
    } catch (err) {
      setError("We encountered an issue. Please try again or reach out to info@chatbotboy.ai");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Smith"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="businessProcess" className="block text-sm font-semibold text-gray-700">Describe Your Process *</label>
        <textarea
          id="businessProcess"
          name="businessProcess"
          required
          value={formData.businessProcess}
          onChange={handleChange}
          rows={6}
          placeholder="Provide detail about your workflows for analysis..."
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
        ></textarea>
      </div>

      {error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">{error}</div>}

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all transform active:scale-[0.98] ${
          isFormValid && !isSubmitting 
            ? "bg-[#15803d] hover:bg-[#166534] hover:shadow-xl cursor-pointer" 
            : "bg-gray-400 cursor-not-allowed opacity-70"
        }`}
      >
        {isSubmitting ? "Processing..." : "Get My Free Roadmap"}
      </button>
    </form>
  );
};

export default LeadForm;