import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import App from './App';
import './i18n';
import './index.css';

// Create a client for React Query
const queryClient = new QueryClient();

// PayPal client configuration
const paypalOptions = {
  "client-id": "test", // Replace with your actual PayPal client ID in production
  currency: "EUR",
  intent: "capture",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PayPalScriptProvider options={paypalOptions}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PayPalScriptProvider>
    </QueryClientProvider>
  </StrictMode>
);