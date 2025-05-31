import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Menu, X } from 'lucide-react';
import { propertyData } from '../../data/propertyData';
import LanguageSelector from '../common/LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add background color to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('common.home'), path: '/' },
    { name: t('common.gallery'), path: '/galeria' },
    { name: t('common.book'), path: '/reservar' },
    { name: t('common.location'), path: '/ubicacion' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Home size={28} className={`${isScrolled || isMenuOpen ? 'text-teal-600' : 'text-white'}`} />
          <span className={`font-serif text-xl font-semibold ${
            isScrolled || isMenuOpen ? 'text-teal-800' : 'text-white'
          }`}>
            Houseplan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? isScrolled ? 'text-teal-600 border-b-2 border-teal-600' : 'text-white border-b-2 border-white'
                  : isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-100'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/reservar" 
            className={`btn-primary text-sm py-2 px-4 ${!isScrolled && 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white border-opacity-40'}`}
          >
            {t('common.book')} {t('common.from')} {propertyData.pricing.basePrice}€/{t('common.perNight')}
          </Link>
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button
            className={`${isScrolled || isMenuOpen ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t mt-2 shadow-lg animate-fade-in absolute w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg ${
                  location.pathname === link.path
                    ? 'bg-teal-50 text-teal-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservar"
              className="btn-primary text-center mt-2"
            >
              {t('common.book')} {t('common.from')} {propertyData.pricing.basePrice}€/{t('common.perNight')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;