import './firebase';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AdminProvider } from './contexts/AdminContext';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const LegalNoticePage = lazy(() => import('./pages/LegalNoticePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const AdminCalendarPage = lazy(() => import('./pages/admin/AdminCalendarPage'));
const AdminPricingPage = lazy(() => import('./pages/admin/AdminPricingPage'));
const AdminGalleryPage = lazy(() => import('./pages/admin/AdminGalleryPage'));
const AdminSettingsPage = lazy(() => import('./pages/admin/AdminSettingsPage'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const BookingCalendarAirbnb = lazy(() => import('./components/booking/BookingCalendarAirbnb'));
const CalendarFromIcs = lazy(() => import('./components/booking/CalendarFromIcs'));
const CalendarDashboard = lazy(() => import('./components/CalendarDashboard'));
const AdminMenu = lazy(() => import('./components/layout/AdminMenu'));

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<null | object>(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsub();
  }, []);

  if (user === undefined) return <LoadingSpinner />;
  if (!user) return <Navigate to="/auth" replace />;
  return children;
};

function App() {
  return (
    <AdminProvider>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/reservar" element={<BookingPage />} />
            <Route path="/ubicacion" element={<LocationPage />} />
            <Route path="/privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/aviso-legal" element={<LegalNoticePage />} />

            {/* Admin pages */}
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboardPage /></ProtectedRoute>} />
            <Route path="/admin/calendar" element={<ProtectedRoute><AdminCalendarPage /></ProtectedRoute>} />
            <Route path="/admin/pricing" element={<ProtectedRoute><AdminPricingPage /></ProtectedRoute>} />
            <Route path="/admin/gallery" element={<ProtectedRoute><AdminGalleryPage /></ProtectedRoute>} />
            <Route path="/admin/settings" element={<ProtectedRoute><AdminSettingsPage /></ProtectedRoute>} />
            <Route path="/admin/sync" element={<ProtectedRoute><CalendarDashboard /></ProtectedRoute>} />

            {/* Calendario sincronizado */}
            <Route path="/calendario-airbnb" element={<BookingCalendarAirbnb />} />
            <Route path="/calendar-ics" element={<CalendarFromIcs />} />

            {/* Auth pages */}
            <Route path="/auth" element={<Dashboard />} />
            <Route path="/perfil" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />

            {/* Página no encontrada */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </AdminProvider>
  );
}

export default App;
