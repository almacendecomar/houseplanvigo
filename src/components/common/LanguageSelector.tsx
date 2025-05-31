import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-600">
        <Globe size={20} />
        <span className="text-sm font-medium">{languages.find(lang => lang.code === i18n.language)?.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                i18n.language === lang.code ? 'text-teal-600 font-medium' : 'text-gray-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;