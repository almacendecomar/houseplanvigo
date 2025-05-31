import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Save, Globe, Bell, Shield, Key } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminSettingsPage = () => {
  const navigate = useNavigate();
  
  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Configuración | Houseplan Admin</title>
      </Helmet>
      
      <AdminLayout>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-semibold">Configuración</h1>
          <button className="btn-primary flex items-center">
            <Save size={16} className="mr-2" />
            Guardar cambios
          </button>
        </div>
        
        {/* General Settings */}
        <div className="card p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="text-teal-600" size={24} />
            <h2 className="text-lg font-medium">Configuración general</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del alojamiento
              </label>
              <input
                type="text"
                defaultValue="Houseplan"
                className="input-field"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                className="input-field h-24"
                defaultValue="Alojamiento turístico exclusivo en el corazón de la naturaleza"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email de contacto
              </label>
              <input
                type="email"
                defaultValue="hoseplanvigo@gmail.com"
                className="input-field"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono de contacto
              </label>
              <input
                type="tel"
                defaultValue="+34 609 352 757"
                className="input-field"
              />
            </div>
          </div>
        </div>
        
        {/* Notifications */}
        <div className="card p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="text-teal-600" size={24} />
            <h2 className="text-lg font-medium">Notificaciones</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Notificaciones por email</h3>
                <p className="text-sm text-gray-600">Recibe emails cuando haya nuevas reservas</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Notificaciones WhatsApp</h3>
                <p className="text-sm text-gray-600">Recibe mensajes de WhatsApp con las novedades</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Security */}
        <div className="card p-6 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="text-teal-600" size={24} />
            <h2 className="text-lg font-medium">Seguridad</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email de administrador
              </label>
              <input
                type="email"
                defaultValue="admin@houseplan.com"
                className="input-field"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña actual
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nueva contraseña
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar nueva contraseña
              </label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>
        
        {/* API Keys */}
        <div className="card p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Key className="text-teal-600" size={24} />
            <h2 className="text-lg font-medium">Claves API</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Clave API de Google Maps
              </label>
              <input
                type="text"
                className="input-field font-mono"
                placeholder="Introduce tu clave API de Google Maps"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL del calendario iCal de Airbnb
              </label>
              <input
                type="url"
                className="input-field"
                placeholder="https://www.airbnb.com/calendar/ical/..."
              />
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminSettingsPage;