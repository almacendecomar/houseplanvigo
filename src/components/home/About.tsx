import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { propertyData } from '../../data/propertyData';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-sand-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative pb-24 lg:pb-0">
            <div className="rounded-xl overflow-hidden shadow-custom">
              <img 
                src={propertyData.images[0].url} 
                alt={propertyData.images[0].alt}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div>
            <SectionTitle
              title={t('home.about.title')}
            />
            
            <div className="space-y-6">
              <p className="text-gray-700">
                {t('home.about.description')}
              </p>
              
              <div>
                <Link to="/galeria" className="btn-primary">
                  {t('common.viewGallery')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;