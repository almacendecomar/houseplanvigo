import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-serif font-bold text-teal-600">404</h1>
        <h2 className="text-3xl font-medium mt-4 mb-6">Página no encontrada</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home size={18} className="mr-2" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;