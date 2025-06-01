
// src/pages/admin/AdminDashboardPage.tsx
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const AdminDashboardPage = () => {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/admin';
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-700">Panel de administración</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/admin/bookings" className="bg-white shadow p-4 rounded hover:bg-teal-50 transition">
          <h2 className="text-lg font-semibold text-teal-700">📋 Ver reservas</h2>
          <p className="text-sm text-gray-600">Listado completo de huéspedes y fechas.</p>
        </Link>

        <Link to="/admin/calendar" className="bg-white shadow p-4 rounded hover:bg-teal-50 transition">
          <h2 className="text-lg font-semibold text-teal-700">📆 Calendario</h2>
          <p className="text-sm text-gray-600">Ver fechas ocupadas y sincronizar.</p>
        </Link>

        <Link to="/admin/gallery" className="bg-white shadow p-4 rounded hover:bg-teal-50 transition">
          <h2 className="text-lg font-semibold text-teal-700">🖼 Galería</h2>
          <p className="text-sm text-gray-600">Sube o gestiona fotos del alojamiento.</p>
        </Link>

        <Link to="/admin/settings" className="bg-white shadow p-4 rounded hover:bg-teal-50 transition">
          <h2 className="text-lg font-semibold text-teal-700">⚙️ Configuración</h2>
          <p className="text-sm text-gray-600">Modificar opciones generales.</p>
        </Link>

        <Link to="/calendario-airbnb" className="bg-white shadow p-4 rounded hover:bg-teal-50 transition">
          <h2 className="text-lg font-semibold text-teal-700">🔄 Airbnb</h2>
          <p className="text-sm text-gray-600">Ver fechas desde Airbnb (.ics).</p>
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-100 shadow p-4 rounded hover:bg-red-200 text-left transition"
        >
          <h2 className="text-lg font-semibold text-red-700">🚪 Cerrar sesión</h2>
          <p className="text-sm text-gray-600">Salir del panel de administración.</p>
        </button>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
