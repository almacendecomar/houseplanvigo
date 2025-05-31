import { Link } from 'react-router-dom';
import { Home, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { propertyData } from '../../data/propertyData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Home size={24} className="text-teal-400" />
              <span className="font-serif text-xl font-semibold text-white">Houseplan</span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              Disfruta de una experiencia única en nuestro alojamiento turístico en Vigo.
              Confort y tranquilidad en una ciudad privilegiada.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-300 hover:text-teal-400 transition-colors">Galería</Link>
              </li>
              <li>
                <Link to="/reservar" className="text-gray-300 hover:text-teal-400 transition-colors">Reservar</Link>
              </li>
              <li>
                <Link to="/ubicacion" className="text-gray-300 hover:text-teal-400 transition-colors">Ubicación</Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-gray-300 hover:text-teal-400 transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="text-gray-300 hover:text-teal-400 transition-colors">Aviso Legal</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <a href="mailto:hoseplanvigo@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                  hoseplanvigo@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <a href="tel:+34609352757" className="text-gray-300 hover:text-teal-400 transition-colors">
                  +34 609 352 757
                </a>
              </li>
              <li className="mt-6">
                <Link to="/reservar" className="btn-primary">
                  Reservar desde {propertyData.pricing.basePrice}€/noche
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Houseplan. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacidad" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/aviso-legal" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;