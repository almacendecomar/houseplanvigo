import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Download, Search, Filter } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import * as XLSX from 'xlsx';

// Mock guest data
const mockGuestData = [
  {
    id: 1,
    fullName: 'Carlos Martínez',
    email: 'carlos@example.com',
    phone: '+34 612 345 111',
    documentType: 'DNI',
    documentNumber: '12345678A',
    address: 'Calle Mayor 15, Madrid',
    country: 'España',
    lastStay: '15/09/2024 - 18/09/2024',
    totalStays: 2
  },
  {
    id: 2,
    fullName: 'Laura Sánchez',
    email: 'laura@example.com',
    phone: '+34 612 345 222',
    documentType: 'Pasaporte',
    documentNumber: 'AB1234567',
    address: 'Avenida Diagonal 300, Barcelona',
    country: 'España',
    lastStay: '20/09/2024 - 25/09/2024',
    totalStays: 1
  },
  {
    id: 3,
    fullName: 'Miguel López',
    email: 'miguel@example.com',
    phone: '+34 612 345 333',
    documentType: 'DNI',
    documentNumber: '87654321B',
    address: 'Calle Sierpes 20, Sevilla',
    country: 'España',
    lastStay: '02/10/2024 - 05/10/2024',
    totalStays: 3
  },
  {
    id: 4,
    fullName: 'Ana García',
    email: 'ana@example.com',
    phone: '+34 612 345 444',
    documentType: 'DNI',
    documentNumber: '11223344C',
    address: 'Calle Gran Vía 25, Madrid',
    country: 'España',
    lastStay: '10/10/2024 - 12/10/2024',
    totalStays: 1
  },
  {
    id: 5,
    fullName: 'Javier Ruiz',
    email: 'javier@example.com',
    phone: '+34 612 345 555',
    documentType: 'Pasaporte',
    documentNumber: 'CD7654321',
    address: 'Calle Triana 10, Valencia',
    country: 'España',
    lastStay: '15/10/2024 - 20/10/2024',
    totalStays: 2
  },
];

const AdminGuestDataPage = () => {
  const navigate = useNavigate();
  
  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);
  
  // Export to Excel function
  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(mockGuestData);
    
    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Huéspedes');
    
    // Generate Excel file
    XLSX.writeFile(workbook, 'Datos_Huespedes_Houseplan.xlsx');
  };

  return (
    <>
      <Helmet>
        <title>Datos de Huéspedes | Houseplan Admin</title>
      </Helmet>
      
      <AdminLayout>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-semibold">Datos de Huéspedes</h1>
          <button 
            onClick={exportToExcel}
            className="btn-primary flex items-center"
          >
            <Download size={16} className="mr-2" />
            Exportar a Excel
          </button>
        </div>
        
        {/* Search and Filter */}
        <div className="card p-4 mb-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, email o documento..."
                className="input-field pl-10"
              />
            </div>
            
            <div className="w-full md:w-auto">
              <select
                className="input-field w-full"
                defaultValue=""
              >
                <option value="" disabled>Filtrar por país</option>
                <option value="all">Todos los países</option>
                <option value="ES">España</option>
                <option value="FR">Francia</option>
                <option value="UK">Reino Unido</option>
                <option value="DE">Alemania</option>
              </select>
            </div>
            
            <button
              className="btn bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center"
            >
              <Filter size={16} className="mr-2" />
              Más filtros
            </button>
          </div>
        </div>
        
        {/* Guest Data Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Documento
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dirección
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Última estancia
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total estancias
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockGuestData.map((guest) => (
                  <tr key={guest.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {guest.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div>{guest.email}</div>
                      <div className="text-xs">{guest.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div>{guest.documentType}</div>
                      <div className="text-xs">{guest.documentNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div>{guest.address}</div>
                      <div className="text-xs">{guest.country}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {guest.lastStay}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {guest.totalStays}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-teal-600 hover:text-teal-800 mr-3">
                        Ver
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminGuestDataPage;