import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Save, Calendar } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { propertyData } from '../../data/propertyData';

const AdminPricingPage = () => {
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
        <title>Gestión de Precios | Houseplan Admin</title>
      </Helmet>
      
      <AdminLayout>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-semibold">Gestión de Precios</h1>
          <button className="btn-primary flex items-center">
            <Save size={16} className="mr-2" />
            Guardar cambios
          </button>
        </div>
        
        {/* Base Pricing */}
        <div className="card p-6 mb-8">
          <h2 className="text-lg font-medium mb-4">Precios base</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Precio por noche
              </label>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={propertyData.pricing.basePrice}
                  className="input-field pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tarifa de limpieza
              </label>
              <div className="relative">
                <input
                  type="number"
                  defaultValue={propertyData.pricing.cleaningFee}
                  className="input-field pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Noches mínimas
              </label>
              <input
                type="number"
                defaultValue={propertyData.pricing.minNights}
                className="input-field"
              />
            </div>
          </div>
        </div>
        
        {/* Seasonal Pricing */}
        <div className="card p-6 mb-8">
          <h2 className="text-lg font-medium mb-4">Precios por temporada</h2>
          
          <div className="space-y-6">
            {/* High Season */}
            <div>
              <h3 className="font-medium mb-3">Temporada alta</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha inicio
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha fin
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="input-field pl-10" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Precio por noche
                  </label>
                  <div className="relative">
                    <input type="number" className="input-field pr-8" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mid Season */}
            <div>
              <h3 className="font-medium mb-3">Temporada media</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha inicio
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha fin
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="input-field pl-10" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Precio por noche
                  </label>
                  <div className="relative">
                    <input type="number" className="input-field pr-8" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Low Season */}
            <div>
              <h3 className="font-medium mb-3">Temporada baja</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha inicio
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="input-field pl-10" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha fin
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="input-field pl-10" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Precio por noche
                  </label>
                  <div className="relative">
                    <input type="number" className="input-field pr-8" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Special Dates */}
        <div className="card p-6">
          <h2 className="text-lg font-medium mb-4">Precios especiales</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" className="input-field pl-10" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Precio por noche
                </label>
                <div className="relative">
                  <input type="number" className="input-field pr-8" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                </div>
              </div>
              <div className="flex items-end">
                <button className="btn-primary w-full">Añadir fecha especial</button>
              </div>
            </div>
            
            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Precio
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      31/12/2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      250€
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-coral-600 hover:text-coral-800">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminPricingPage;