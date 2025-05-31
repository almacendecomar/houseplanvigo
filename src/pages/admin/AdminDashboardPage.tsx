import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CalendarDays, Users, FileText, Settings } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  
  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  // Mock dashboard data
  const dashboardData = {
    totalBookings: 24,
    upcomingBookings: 8,
    totalGuests: 86,
    revenue: 4250,
    recentBookings: [
      { id: 'HP-123456', guestName: 'Carlos Martínez', dates: '15/09/2024 - 18/09/2024', status: 'confirmed' },
      { id: 'HP-123457', guestName: 'Laura Sánchez', dates: '20/09/2024 - 25/09/2024', status: 'pending' },
      { id: 'HP-123458', guestName: 'Miguel López', dates: '02/10/2024 - 05/10/2024', status: 'confirmed' },
    ]
  };

  return (
    <>
      <Helmet>
        <title>Dashboard Admin | Houseplan</title>
      </Helmet>
      
      <AdminLayout>
        <h1 className="text-2xl font-serif font-semibold mb-6">Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">Reservas totales</p>
                <p className="text-3xl font-semibold mt-1">{dashboardData.totalBookings}</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-lg">
                <CalendarDays className="text-teal-600" size={20} />
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">Próximas llegadas</p>
                <p className="text-3xl font-semibold mt-1">{dashboardData.upcomingBookings}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="text-blue-600" size={20} />
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total huéspedes</p>
                <p className="text-3xl font-semibold mt-1">{dashboardData.totalGuests}</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <Users className="text-amber-600" size={20} />
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 text-sm">Ingresos (€)</p>
                <p className="text-3xl font-semibold mt-1">{dashboardData.revenue}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FileText className="text-green-600" size={20} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Bookings */}
        <div className="card p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Reservas recientes</h2>
            <button 
              onClick={() => navigate('/admin/reservas')}
              className="text-sm text-teal-600 hover:text-teal-800"
            >
              Ver todas
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Referencia
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Huésped
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fechas
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dashboardData.recentBookings.map((booking, index) => (
                  <tr key={booking.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {booking.guestName}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {booking.dates}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-right">
                      <button className="text-teal-600 hover:text-teal-800 mr-3">
                        Ver
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Settings size={16} />
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

export default AdminDashboardPage;