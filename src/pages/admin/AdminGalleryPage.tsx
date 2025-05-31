import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Upload, Trash2, MoveUp, MoveDown, Image } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { propertyData } from '../../data/propertyData';

const AdminGalleryPage = () => {
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
        <title>Gestión de Galería | Houseplan Admin</title>
      </Helmet>
      
      <AdminLayout>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-semibold">Gestión de Galería</h1>
          <button className="btn-primary flex items-center">
            <Upload size={16} className="mr-2" />
            Subir imágenes
          </button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyData.images.map((image, index) => (
            <div key={image.id} className="card overflow-hidden group">
              <div className="relative">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-2">
                  <button className="p-2 bg-white rounded-full text-gray-800 hover:text-teal-600">
                    <MoveUp size={18} />
                  </button>
                  <button className="p-2 bg-white rounded-full text-gray-800 hover:text-teal-600">
                    <MoveDown size={18} />
                  </button>
                  <button className="p-2 bg-white rounded-full text-gray-800 hover:text-coral-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <input
                  type="text"
                  defaultValue={image.alt}
                  className="input-field text-sm"
                  placeholder="Descripción de la imagen"
                />
              </div>
            </div>
          ))}
          
          {/* Upload placeholder */}
          <div className="card border-2 border-dashed border-gray-300 flex items-center justify-center h-64 cursor-pointer hover:border-teal-500 transition-colors">
            <div className="text-center">
              <Image size={32} className="mx-auto text-gray-400 mb-2" />
              <p className="text-gray-600">Arrastra imágenes aquí o</p>
              <p className="text-teal-600 font-medium">haz clic para seleccionar</p>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminGalleryPage;