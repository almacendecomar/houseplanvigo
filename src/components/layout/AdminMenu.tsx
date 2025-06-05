import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <aside className="w-full md:w-64 bg-gray-100 h-full md:h-screen p-4 shadow-md">
      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? 'font-bold text-blue-600' : 'text-gray-800'
          }
        >
          📊 Panel
        </NavLink>

        <NavLink
          to="/admin/calendar"
          className={({ isActive }) =>
            isActive ? 'font-bold text-blue-600' : 'text-gray-800'
          }
        >
          🗓 Calendario
        </NavLink>

        <NavLink
          to="/admin/gallery"
          className={({ isActive }) =>
            isActive ? 'font-bold text-blue-600' : 'text-gray-800'
          }
        >
          🖼 Galería
        </NavLink>

        <NavLink
          to="/admin/pricing"
          className={({ isActive }) =>
            isActive ? 'font-bold text-blue-600' : 'text-gray-800'
          }
        >
          💰 Precios
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive ? 'font-bold text-blue-600' : 'text-gray-800'
          }
        >
          ⚙️ Ajustes
        </NavLink>

        <NavLink
          to="/admin/sync"
          className={({ isActive }) =>
            isActive ? 'font-bold text-blue-600' : 'text-gray-800'
          }
        >
          🔄 Sincronizar Airbnb
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminMenu;
