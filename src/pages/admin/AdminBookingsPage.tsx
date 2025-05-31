import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Search, Calendar, Download, ArrowDown, ArrowUp } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

// Mock bookings data
const mockBookings = [
  { 
    id: 'HP-123456', 
    guestName: 'Carlos Martínez', 
    email: 'carlos@example.com',
    startDate: '15/09/2024',
    endDate: '18/09/2024',
    nights: 3,
    guests: 2,
    totalAmount: 500,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  { 
    id: 'HP-123457', 
    guestName: 'Laura Sánchez', 
    email: 'laura@example.com',
    startDate: '20/09/2024',
    endDate: '25/09/2024',
    nights: 5,
    guests: 4,
    totalAmount: 850,
    status: 'pending',
    paymentStatus: 'pending'
  },
  { 
    id: 'HP-123458', 
    guestName: 'Miguel López', 
    email: 'miguel@example.com',
    startDate: '02/10/2024',
    endDate: '05/10/2024',
    nights: 3,
    guests: 2,
    totalAmount: 500,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  { 
    id: 'HP-123459', 
    guestName: 'Ana García', 
    email: 'ana@example.com',
    startDate: '10/10/2024',
    endDate: '12/10/2024',
    nights: 2,
    guests: 1,
    totalAmount: 350,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  { 
    id: 'HP-123460', 
    guestName: 'Javier Ruiz', 
    email: 'javier@example.com',
    startDate: '15/10/2024',
    endDate: '20/10/2024',
    nights: 5,
    guests: 3,
    totalAmount: 800,
    status: 'cancelled',
    paymentStatus: 'refunded'
  },
];

const AdminBookingsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortField, setSortField] = useState('startDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);
  
  // Filter and sort bookings
  const filteredBookings = mockBookings.filter(booking => {
    // Filter by search term
    const matchesSearch = 
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      booking.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by status
    const matchesStatus = 
      statusFilter === 'all' || 
      booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    // Sort by the selected field
    if (a[sortField as keyof typeof a] < b[sortField as keyof typeof b]) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (a[sortField as keyof typeof a] > b[sortField as keyof typeof b]) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });
  
  // Handle sort toggle
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Export to Excel function (mock)
  const exportToExcel = () => {
    alert('La exportación a Excel estaría implementada aquí');
  };

  return (
    <>
      <Helmet>
        <title>Gestión de Reservas | Houseplan Admin</title>
      </Helmet>
      
      <AdminLayout>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-semibold">Gestión de Reservas</h1>
          <button 
            onClick={exportToExcel}
            className="btn-primary flex items-center"
          >
            <Download size={16} className="mr-2" />
            Exportar a Excel
          </button>
        </div>
        
        {/* Filters */}
        <div className="card p-4 mb-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por referencia, nombre o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            
            <div className="w-full md:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field w-full"
              >
                <option value="all">Todos los estados</option>
                <option value="confirmed">Confirmadas</option>
                <option value="pending">Pendientes</option>
                <option value="cancelled">Canceladas</option>
              </select>
            </div>
            
            <div className="w-full md:w-auto flex items-center">
              <Calendar size={18} className="text-gray-400 mr-2" />
              <input
                type="date"
                className="input-field w-full"
                placeholder="Filtrar por fecha"
              />
            </div>
          </div>
        </div>
        
        {/* Bookings Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('id')}
                  >
                    <div className="flex items-center">
                      Referencia
                      {sortField === 'id' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('guestName')}
                  >
                    <div className="flex items-center">
                      Huésped
                      {sortField === 'guestName' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('startDate')}
                  >
                    <div className="flex items-center">
                      Fechas
                      {sortField === 'startDate' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('nights')}
                  >
                    <div className="flex items-center">
                      Noches
                      {sortField === 'nights' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('guests')}
                  >
                    <div className="flex items-center">
                      Huéspedes
                      {sortField === 'guests' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('totalAmount')}
                  >
                    <div className="flex items-center">
                      Total
                      {sortField === 'totalAmount' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('status')}
                  >
                    <div className="flex items-center">
                      Estado
                      {sortField === 'status' && (
                        sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div>{booking.guestName}</div>
                      <div className="text-gray-500 text-xs">{booking.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {booking.startDate} - {booking.endDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {booking.nights}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {booking.guests}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {booking.totalAmount}€
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : booking.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {booking.status === 'confirmed' 
                          ? 'Confirmada' 
                          : booking.status === 'pending'
                            ? 'Pendiente'
                            : 'Cancelada'
                        }
                      </span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                        booking.paymentStatus === 'paid' 
                          ? 'bg-blue-100 text-blue-800' 
                          : booking.paymentStatus === 'pending'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-purple-100 text-purple-800'
                      }`}>
                        {booking.paymentStatus === 'paid' 
                          ? 'Pagado' 
                          : booking.paymentStatus === 'pending'
                            ? 'Pendiente'
                            : 'Reembolsado'
                        }
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-teal-600 hover:text-teal-800 mr-3">
                        Ver
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 mr-3">
                        Editar
                      </button>
                      <button className="text-coral-600 hover:text-coral-800">
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))}
                
                {filteredBookings.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                      No se encontraron reservas que coincidan con los filtros.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminBookingsPage;