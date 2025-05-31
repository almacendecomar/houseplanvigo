import { MapPin } from 'lucide-react';

// Points of interest data for Vigo
const pointsOfInterest = [
  {
    id: 1,
    name: 'Monte del Castro',
    distance: '15 min',
    description: 'Fortaleza histórica con las mejores vistas panorámicas de la ría de Vigo. Parque y mirador con vistas 360º de la ciudad.',
    image: '/ChatGPT Image 31 may 2025, 13_18_31.png'
  },
  {
    id: 2,
    name: 'Playa de Samil',
    distance: '10 min',
    description: 'La playa urbana más popular de Vigo, con 1,7 km de arena fina, paseo marítimo y zonas deportivas.',
    image: '/ChatGPT Image 31 may 2025, 09_37_26.png'
  },
  {
    id: 3,
    name: 'Casco Vello',
    distance: '20 min',
    description: 'Centro histórico de Vigo con calles empedradas, restaurantes de marisco y la famosa Ostreira do Mercado da Pedra.',
    image: 'https://images.pexels.com/photos/17725001/pexels-photo-17725001.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'Islas Cíes',
    distance: '30 min al puerto',
    description: 'Parque Nacional marítimo-terrestre con algunas de las mejores playas de Europa. Accesible en barco desde el puerto.',
    image: 'https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Plaza de Compostela',
    distance: '25 min',
    description: 'Elegante plaza con jardines, fuentes y edificios históricos. Punto de encuentro y zona comercial.',
    image: 'https://images.pexels.com/photos/5358853/pexels-photo-5358853.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    name: 'Mercado da Pedra',
    distance: '20 min',
    description: 'Mercado tradicional famoso por sus ostras frescas de la ría y productos locales.',
    image: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 7,
    name: 'Museo do Mar',
    distance: '15 min',
    description: 'Museo dedicado a la historia marítima de Vigo, su puerto y la industria pesquera.',
    image: 'https://images.pexels.com/photos/17676451/pexels-photo-17676451.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 8,
    name: 'Pazo de Castrelos',
    distance: '12 min',
    description: 'Palacio del siglo XVII con museo y extensos jardines históricos. Sede de eventos culturales.',
    image: 'https://images.pexels.com/photos/5997961/pexels-photo-5997961.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const PointsOfInterest = () => {
  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pointsOfInterest.map((poi) => (
          <div key={poi.id} className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="sm:col-span-1">
                <img 
                  src={poi.image} 
                  alt={poi.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:col-span-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-lg font-medium">{poi.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="text-teal-600 mr-1" />
                    {poi.distance}
                  </div>
                </div>
                <p className="mt-2 text-gray-600 text-sm">{poi.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointsOfInterest;