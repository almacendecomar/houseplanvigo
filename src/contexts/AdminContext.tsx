import { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser } from '../types/admin';

interface AdminContextType {
  user: AdminUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage or session for existing auth
    const checkAuth = () => {
      const savedAuth = localStorage.getItem('adminAuth');
      if (savedAuth) {
        setUser(JSON.parse(savedAuth));
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock login - replace with real authentication
      if (email === 'admin@houseplan.com' && password === 'admin123') {
        const userData: AdminUser = {
          id: '1',
          email,
          role: 'admin',
          lastLogin: new Date()
        };
        setUser(userData);
        localStorage.setItem('adminAuth', JSON.stringify(userData));
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('adminAuth');
  };

  return (
    <AdminContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};