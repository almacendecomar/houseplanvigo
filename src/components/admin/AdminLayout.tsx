import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  DollarSign,
  Image,
  Settings, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAdmin();
  
  // Check authentication
  useEffect(() => {
    if (!user) {
      navigate('/admin');
    }
  }, [user, navigate]);
  
  const handleLogout = async () => {
    await logout();
    navigate('/admin');
  };
  
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <Home size={20} /> },
    { name: 'Calendar', path: '/admin/calendar', icon: <Calendar size={20} /> },
    { name: 'Pricing', path: '/admin/pricing', icon: <DollarSign size={20} /> },
    { name: 'Gallery', path: '/admin/gallery', icon: <Image size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Home size={24} className="text-teal-600" />
          <span className="font-serif text-xl font-semibold text-gray-800">Admin</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-700"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={`bg-white w-64 shadow-sm flex-shrink-0 border-r border-gray-200 
          ${isSidebarOpen ? 'block fixed inset-0 z-40' : 'hidden'} md:block md:static`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Home size={24} className="text-teal-600" />
            <span className="font-serif text-xl font-semibold text-gray-800">Houseplan</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Admin Panel</p>
        </div>
        
        <nav className="mt-4 px-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                    location.pathname === item.path 
                      ? 'bg-teal-50 text-teal-700' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 border-t border-gray-200 pt-4">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 text-gray-700 hover:text-coral-600 w-full px-4 py-3 rounded-lg hover:bg-gray-50"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>
      
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;