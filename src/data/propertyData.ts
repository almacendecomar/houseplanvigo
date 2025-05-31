import { Property } from '../types';

export const propertyData: Property = {
  id: 'houseplan-main',
  name: 'Houseplan',
  description: `Bienvenido a Houseplan, un fantástico alojamiento turístico situado en la Avenida de Castelao, en pleno corazón de Vigo. Rodeado de amplios parques, zonas verdes y jardines, Houseplan ofrece un entorno perfecto para el descanso, combinando comodidad, estilo y una ubicación privilegiada.

Desde sus estancias podrás disfrutar de unas impresionantes vistas a la ría y al puerto de Vigo, creando el escenario ideal tanto para unas vacaciones tranquilas como para una escapada de trabajo.

En Houseplan cuidamos cada detalle para que tu estancia sea inolvidable. ¡Te esperamos!`,
  shortDescription: 'En Vigo, confort y tranquilidad en una ciudad privilegiada.',
  location: {
    address: 'Avenida de Castelao',
    city: 'Vigo',
    province: 'Pontevedra',
    postalCode: '36208',
    country: 'España',
    coordinates: [42.22324, -8.72264],
  },
  ratings: {
    overall: 4.96,
    totalReviews: 91,
    distribution: {
      5: 96,
      4: 4,
      3: 0,
      2: 0,
      1: 0
    },
    categories: {
      cleanliness: 4.9,
      accuracy: 5.0,
      checkin: 5.0,
      communication: 5.0,
      location: 4.7,
      value: 4.9
    }
  },
  amenities: {
    views: [
      'Vistas panorámicas',
      'Vistas al perfil urbano',
      'Vistas al parque',
      'Vistas al jardín',
      'Vistas al puerto',
      'Vistas al mar'
    ],
    bathroom: [
      'Bañera',
      'Secador de pelo',
      'Productos de limpieza',
      'Champú',
      'Gel de ducha de Genérico',
      'Agua caliente',
      'Gel de ducha'
    ],
    bedroom: [
      'Lavadora en el alojamiento (Gratis)',
      'Secadora en el alojamiento (Gratis)',
      'Toallas, sábanas, jabón y papel higiénico',
      'Perchas',
      'Ropa de cama',
      'Ropa de cama de algodón',
      'Almohadas y mantas adicionales',
      'Persianas o cortinas opacas',
      'Plancha',
      'Tendedero para ropa',
      'Espacio para guardar la ropa: armario'
    ],
    entertainment: [
      'Televisión de alta definición con Fire TV, televisión por cable estándar',
      'Videoconsola: Nintendo Wii',
      'Juegos recreativos',
      'Libros y material de lectura'
    ],
    family: [
      'Cuna',
      'Parque/cunas de viaje',
      'Libros y juguetes para niños',
      'Trona',
      'Bañera para bebés',
      'Juegos de mesa'
    ],
    heating: [
      'Chimenea interior: eléctrica',
      'Ventiladores portátiles',
      'Calefacción central'
    ],
    security: [
      'Detector de humo',
      'Detector de monóxido de carbono',
      'Botiquín'
    ],
    internet: [
      'Wifi',
      'Zona para trabajar'
    ],
    kitchen: [
      'Cocina disponible para el uso de los huéspedes',
      'Frigorífico de Boch',
      'Microondas',
      'Utensilios básicos de cocina',
      'Cazuelas y sartenes, aceite, sal y pimienta',
      'Platos y cubiertos',
      'Cuencos, palillos, platos, tazas, etc.',
      'Frigorífico mini',
      'Congelador',
      'Lavavajillas',
      'Fogón',
      'Horno de acero inoxidable de Boch',
      'Cafetera: cafetera de filtro',
      'Copas de vino',
      'Tostadora',
      'Bandeja de repostería',
      'Batidora',
      'Mesa de comedor',
      'Café'
    ],
    location: [
      'Entrada independiente',
      'Entrada por otra calle o edificio',
      'Lavandería cercana'
    ],
    parking: [
      'Aparcamiento gratuito en garaje en la propiedad: 1 plaza',
      'Aparcamiento gratuito en la calle',
      'Aparcamiento de pago en garaje fuera de la propiedad'
    ],
    accessibility: [
      'Ascensor',
      'Libre de escaleras'
    ],
    services: [
      'Disponible para estancias largas',
      'Permite estancias de 28 días o más'
    ],
    notIncluded: [
      'Cámaras de seguridad en los exteriores de la propiedad',
      'Cámara en entrada vivienda',
      'Aire acondicionado'
    ]
  },
  rooms: 3,
  beds: 3,
  bathrooms: 3,
  maxGuests: 6,
  pricing: {
    basePrice: 180,
    cleaningFee: 45,
    minNights: 2
  },
  images: [
    {
      id: 'img1',
      url: '/ChatGPT Image 31 may 2025, 09_37_26.png',
      alt: 'Dormitorio principal con vistas nocturnas a la ciudad'
    },
    {
      id: 'img2',
      url: '/ChatGPT Image 31 may 2025, 09_37_36.png',
      alt: 'Dormitorio con vistas a la ría y cruceros'
    },
    {
      id: 'img3',
      url: '/ChatGPT Image 31 may 2025, 09_37_47.png',
      alt: 'Cocina moderna totalmente equipada con vistas a la montaña'
    },
    {
      id: 'img4',
      url: '/ChatGPT Image 31 may 2025, 13_15_04.png',
      alt: 'Baño de diseño con acabados en madera y azulejo azul'
    },
    {
      id: 'img5',
      url: '/ChatGPT Image 28 may 2025, 21_49_02 copy.png',
      alt: 'Pasillo luminoso con acabados modernos y elegantes'
    },
    {
      id: 'img6',
      url: '/ChatGPT Image 28 may 2025, 21_41_02 copy.png',
      alt: 'Tranvía histórico de Vigo, transporte cercano al alojamiento'
    },
    {
      id: 'img7',
      url: '/ChatGPT Image 31 may 2025, 13_18_31.png',
      alt: 'Vistas panorámicas desde el Monte del Castro'
    },
    {
      id: 'img8',
      url: '/ChatGPT Image 31 may 2025, 09_37_26.png',
      alt: 'Playa de Samil con su característico paseo marítimo'
    },
    {
      id: 'img9',
      url: '/ChatGPT Image 28 may 2025, 21_26_46.png',
      alt: 'Salón moderno con sofá gris y vistas a la ciudad'
    }
  ],
  rules: [
    'Check-in: 16:00 - 20:00',
    'Check-out: hasta las 11:00',
    'No se permiten fiestas o eventos',
    'No fumar dentro del alojamiento',
    'No se admiten mascotas',
    'Silencio a partir de las 23:00'
  ]
};

// Mock data for availability (next 90 days)
export const generateAvailabilityData = (): { [key: string]: boolean } => {
  const availability: { [key: string]: boolean } = {};
  const now = new Date();
  
  // Generate availability for the next 90 days
  for (let i = 0; i < 90; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() + i);
    
    // Randomly set some dates as unavailable (about 30%)
    const isAvailable = Math.random() > 0.3;
    
    // Format date as ISO string and store only the date part
    const dateKey = date.toISOString().split('T')[0];
    availability[dateKey] = isAvailable;
  }
  
  return availability;
};

export const availabilityData = generateAvailabilityData();

// FAQ data
export const faqData = [
  {
    question: "¿Cuál es la política de cancelación?",
    answer: "Ofrecemos reembolso completo si cancelas hasta 7 días antes de la llegada. Después, se aplica un cargo del 50% hasta 78 horas antes. No hay reembolsos para cancelaciones con menos de 48 horas de antelación."
  },
  {
    question: "¿Hay aparcamiento disponible?",
    answer: "Sí, disponemos de plaza de garaje doble incluida en el precio. Además, hay 2 plazas de aparcamiento para personas con discapacidad en el portal del edificio."
  },
  {
    question: "¿Cómo llego al centro de la ciudad?",
    answer: "El centro de Vigo está a 8 minutos en autobús o taxi. Hay una parada de autobús justo en el portal. También puedes llegar caminando en unos 35 minutos."
  },
  {
    question: "¿Hay playa cerca?",
    answer: "Sí, la playa más cercana está a 2 km del alojamiento, fácilmente accesible en transporte público o coche."
  },
  {
    question: "¿El alojamiento es accesible?",
    answer: "Sí, el edificio cuenta con dos ascensores y acceso adaptado. También disponemos de plazas de aparcamiento para personas con discapacidad en el portal."
  },
  {
    question: "¿Qué servicios hay cerca?",
    answer: "La zona cuenta con todos los servicios necesarios: supermercados, farmacias, restaurantes, cafeterías y parada de autobús. Plaza América está a pocos minutos caminando."
  }
];

// AI Assistant Knowledge Base
export const assistantKnowledgeBase = {
  property: propertyData,
  faqs: faqData,
  bookingProcess: [
    "Selecciona las fechas de entrada y salida en el calendario",
    "Ingresa el número de huéspedes (máximo 6 personas)",
    "Revisa el resumen y precio total",
    "Completa el formulario con tus datos personales",
    "Realiza el pago mediante PayPal",
    "Recibirás un email de confirmación con todos los detalles"
  ],
  contactInfo: {
    email: "hoseplanvigo@gmail.com",
    phone: "+34 609352757",
    whatsapp: "+34 609352757"
  },
  commonQuestions: {
    "ubicación": "Houseplan está ubicado en la Avenida de Castelao, Vigo, con vistas impresionantes a la ría y al puerto.",
    "precio": "El precio base es de 180€ por noche, con un mínimo de 2 noches. Se aplica una tarifa de limpieza de 45€ por estancia.",
    "servicios": "Ofrecemos 3 dormitorios con camas de 150cm, bañera de hidromasaje, WiFi, plaza de garaje doble, Smart TV, cocina equipada, lavadora, secadora y mucho más.",
    "disponibilidad": "Puedes consultar la disponibilidad en tiempo real en nuestro calendario. La estancia mínima es de 2 noches.",
    "mascotas": "No admitimos mascotas en el alojamiento.",
    "reserva": "Para reservar, selecciona las fechas en nuestro calendario, introduce tus datos y realiza el pago. Recibirás confirmación inmediata por email."
  }
};