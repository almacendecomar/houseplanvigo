import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Luis Felipe',
    date: 'abril 2025',
    rating: 5,
    comment: 'Viaje familiar. Estuvimos como en casa. Es fiel reflejo de lo que se anuncia. La casa es muy cómoda, tiene todo lo necesario para una estancia ideal, está muy bien comunicada y con excelentes vistas. No puedo decir otra cosa. Nuestra experiencia ha sido muy buena.',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=120'
  },
  {
    id: 2,
    name: 'Ángel',
    date: 'agosto 2024',
    rating: 5,
    comment: 'Era nuestra segunda vez y volvimos a disfrutar de esta maravillosa casa. El dormitorio principal tiene unas vistas espectaculares a la ría que da gusto levantar las persianas por la mañana. La casa es muy amplia. Juan nos dejó como la vez anterior comida y bebida de bienvenida que estuvimos disfrutando durante la estancia. Adicionalmente nos trajo productos de su huerta. Para volver otra vez.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=120'
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    date: 'Junio 2024',
    rating: 4,
    comment: 'Lugar ideal para desconectar. La casa es muy acogedora y las vistas a la ría son impresionantes. La zona es tranquila pero con muchas actividades disponibles en los alrededores.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120'
  }
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-teal-50">
      <div className="container-custom">
        <SectionTitle
          title={t('home.testimonials.title')}
          subtitle={t('home.testimonials.subtitle')}
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-gray-700 mb-6">"{testimonial.comment}"</p>
              
              {/* User */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;