import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Helmet } from 'react-helmet';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (err: any) {
      console.error(err.code); // 👈 Ver código de error en consola

      switch (err.code) {
        case 'auth/user-not-found':
          setError('El usuario no existe.');
          break;
        case 'auth/wrong-password':
          setError('La contraseña es incorrecta.');
          break;
        case 'auth/invalid-email':
          setError('El correo electrónico no es válido.');
          break;
        case 'auth/too-many-requests':
          setError('Demasiados intentos. Inténtalo más tarde.');
          break;
        default:
          setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
          break;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login Admin | Houseplan</title>
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
              <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
