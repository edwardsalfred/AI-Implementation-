
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import ThankYouPage from './components/ThankYouPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSuccess = (email: string) => {
    setSubmittedEmail(email);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Routing logic
  if (currentPath === '#privacy-policy') {
    return <PrivacyPolicy />;
  }
  
  if (currentPath === '#terms-of-service') {
    return <TermsOfService />;
  }

  return (
    <div className="min-h-screen">
      {!submittedEmail ? (
        <LandingPage onSuccess={handleSuccess} />
      ) : (
        <ThankYouPage email={submittedEmail} />
      )}
    </div>
  );
};

export default App;
