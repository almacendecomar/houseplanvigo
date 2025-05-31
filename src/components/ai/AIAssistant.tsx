import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, X } from 'lucide-react';
import { assistantKnowledgeBase } from '../../data/propertyData';
import { AIAssistantMessage } from '../../types';

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<AIAssistantMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: '¡Hola! Soy el asistente virtual de Houseplan. ¿En qué puedo ayudarte hoy? Puedo darte información sobre el alojamiento, ayudarte con tu reserva o responder cualquier duda que tengas.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage: AIAssistantMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const response = generateResponse(input);
      const assistantMessage: AIAssistantMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    const normalizedQuery = query.toLowerCase();
    
    // Check for common intents
    if (normalizedQuery.includes('precio') || normalizedQuery.includes('cuesta') || normalizedQuery.includes('tarifa')) {
      return `El precio base es de ${assistantKnowledgeBase.property.pricing.basePrice}€ por noche, con un mínimo de ${assistantKnowledgeBase.property.pricing.minNights} noches. Además, hay una tarifa de limpieza de ${assistantKnowledgeBase.property.pricing.cleaningFee}€ por estancia. Puedes ver el precio exacto para tus fechas utilizando nuestro calendario de reservas.`;
    }
    
    if (normalizedQuery.includes('reserva') || normalizedQuery.includes('reservar') || normalizedQuery.includes('booking')) {
      return `Para realizar una reserva, sigue estos pasos:\n\n1. ${assistantKnowledgeBase.bookingProcess.join('\n2. ')}\n\nSi tienes alguna duda durante el proceso, estoy aquí para ayudarte.`;
    }
    
    if (normalizedQuery.includes('ubicación') || normalizedQuery.includes('donde') || normalizedQuery.includes('dirección')) {
      return `Houseplan está ubicado en ${assistantKnowledgeBase.property.location.address}, ${assistantKnowledgeBase.property.location.city}, ${assistantKnowledgeBase.property.location.province}, España. Es un entorno natural privilegiado con vistas a las montañas. Puedes ver la ubicación exacta en el mapa en la sección "Ubicación" de nuestra web.`;
    }
    
    if (normalizedQuery.includes('habitaciones') || normalizedQuery.includes('baños') || normalizedQuery.includes('camas')) {
      return `Houseplan cuenta con ${assistantKnowledgeBase.property.rooms} habitaciones, ${assistantKnowledgeBase.property.beds} camas y ${assistantKnowledgeBase.property.bathrooms} baños. Puede alojar cómodamente hasta ${assistantKnowledgeBase.property.maxGuests} huéspedes.`;
    }
    
    if (normalizedQuery.includes('servicios') || normalizedQuery.includes('amenities') || normalizedQuery.includes('facilidades')) {
      return `Houseplan ofrece los siguientes servicios:\n\n• ${assistantKnowledgeBase.property.amenities.slice(0, 8).join('\n• ')}\n\nY muchos más servicios para hacer tu estancia confortable.`;
    }
    
    if (normalizedQuery.includes('contactar') || normalizedQuery.includes('teléfono') || normalizedQuery.includes('email') || normalizedQuery.includes('correo')) {
      return `Puedes contactar con nosotros a través de:\n\nEmail: ${assistantKnowledgeBase.contactInfo.email}\nTeléfono: ${assistantKnowledgeBase.contactInfo.phone}\nWhatsApp: ${assistantKnowledgeBase.contactInfo.whatsapp}\n\n¿Prefieres que te pongamos en contacto con un agente humano?`;
    }
    
    if (normalizedQuery.includes('mascotas') || normalizedQuery.includes('perro') || normalizedQuery.includes('gato')) {
      return `No, no es posible traer mascotas al alojamiento. Lo sentimos por las molestias.`;
    }
    
    if (normalizedQuery.includes('cancelación') || normalizedQuery.includes('cancelar') || normalizedQuery.includes('reembolso')) {
      return `Nuestra política de cancelación es la siguiente: ofrecemos reembolso completo si cancelas hasta 7 días antes de la llegada. Después, se aplica un cargo del 50% hasta 78 horas antes. No hay reembolsos para cancelaciones con menos de 48 horas de antelación.`;
    }
    
    if (normalizedQuery.includes('check-in') || normalizedQuery.includes('check-out') || normalizedQuery.includes('llegada') || normalizedQuery.includes('salida') || normalizedQuery.includes('entrada') || normalizedQuery.includes('hora')) {
      return `El check-in es de 16:00 a 20:00 y el check-out es hasta las 11:00. Si necesitas horarios diferentes, consúltanos y haremos lo posible por adaptarnos a tus necesidades.`;
    }
    
    if (normalizedQuery.includes('wifi') || normalizedQuery.includes('internet')) {
      return `Sí, ofrecemos WiFi de alta velocidad gratuito en todo el alojamiento para que puedas mantenerte conectado durante tu estancia.`;
    }
    
    if (normalizedQuery.includes('humano') || normalizedQuery.includes('persona') || normalizedQuery.includes('agente') || normalizedQuery.includes('real')) {
      return `Entiendo que prefieres hablar con una persona. Puedes contactar con nuestro equipo de atención al cliente en el email ${assistantKnowledgeBase.contactInfo.email} o llamando al teléfono ${assistantKnowledgeBase.contactInfo.phone}. También puedes enviar un WhatsApp al ${assistantKnowledgeBase.contactInfo.whatsapp}. Estarán encantados de ayudarte.`;
    }
    
    // Default response if no specific intent is detected
    return `Gracias por tu pregunta. Houseplan es un alojamiento exclusivo en Vigo con todas las comodidades para una estancia inolvidable. ¿Puedes ser más específico sobre qué información necesitas? Puedo ayudarte con detalles sobre precios, servicios, reservas, ubicación o cualquier otra duda que tengas.`;
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-custom overflow-hidden max-h-[70vh] flex flex-col animate-fade-in">
      {/* Header */}
      <div className="bg-teal-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Bot size={20} className="mr-2" />
          <h3 className="font-medium">Asistente de Houseplan</h3>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
          <X size={20} />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: '350px' }}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-lg p-3 ${
              message.role === 'user' 
                ? 'bg-teal-600 text-white rounded-tr-none' 
                : 'bg-gray-100 text-gray-800 rounded-tl-none'
            }`}>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-lg rounded-tl-none p-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="border-t p-3">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center space-x-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <button 
            type="submit"
            className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;