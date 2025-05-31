import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AIAssistant from '../ai/AIAssistant';
import FloatingBookingButton from '../booking/FloatingBookingButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [showAssistant, setShowAssistant] = useState(false);
  const [isAdminPage, setIsAdminPage] = useState(false);
  const [showBookingButton, setShowBookingButton] = useState(true);

  // Check if current page is admin page or booking page
  useEffect(() => {
    setIsAdminPage(location.pathname.startsWith('/admin'));
    setShowBookingButton(!location.pathname.startsWith('/admin') && location.pathname !== '/reservar');
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-sand-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Only show AI assistant and booking button on non-admin pages */}
      {!isAdminPage && (
        <>
          <div className="fixed bottom-6 right-6 z-50">
            <button
              onClick={() => setShowAssistant(!showAssistant)}
              className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-200"
              aria-label="Asistente virtual"
            >
              {showAssistant ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              )}
            </button>
            
            {showAssistant && <AIAssistant onClose={() => setShowAssistant(false)} />}
          </div>

          {showBookingButton && <FloatingBookingButton />}
        </>
      )}
    </div>
  );
};

export default Layout;