import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simple mock authentication
    // In a real application, this would call an API
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        // Store auth in localStorage or context
        localStorage.setItem('adminAuth', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Houseplan</title>
      </Helmet>
      
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md">
          <div className="card p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
                <Lock className="text-teal-600" size={28} />
              </div>
              <h1 className="text-2xl font-serif font-semibold">Panel de Administración</h1>
              <p className="text-gray-600 mt-1">Accede con tus credenciales</p>
            </div>
            
            {error && (
              <div className="bg-coral-50 text-coral-700 p-3 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Usuario
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-field"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary mt-2"
                >
                  {isLoading ? 'Iniciando sesión...' : 'Acceder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLoginPage;