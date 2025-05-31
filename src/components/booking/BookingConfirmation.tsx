import { Check } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const BookingConfirmation = ({ bookingDetails }) => {
  return (
    <div className="card p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="flex justify-center">
          <div className="bg-teal-100 p-3 rounded-full">
            <Check className="text-teal-600\" size={28} />
          </div>
        </div>
        <h2 className="text-2xl font-serif font-semibold mt-4 mb-2">¡Reserva confirmada!</h2>
        <p className="text-gray-600">
          Hemos enviado los detalles a tu correo electrónico
        </p>
      </div>
      
      <div className="space-y-4">
        {/* Reference */}
        <div className="border-b pb-3">
          <p className="text-sm text-gray-500">Referencia de reserva</p>
          <p className="font-medium">{bookingDetails.id}</p>
        </div>
        
        {/* Dates */}
        <div className="border-b pb-3">
          <p className="text-sm text-gray-500">Fechas</p>
          <p className="font-medium">
            {format(bookingDetails.startDate, 'EEEE d MMMM yyyy', { locale: es })} - {format(bookingDetails.endDate, 'EEEE d MMMM yyyy', { locale: es })}
          </p>
        </div>
        
        {/* Guests */}
        <div className="border-b pb-3">
          <p className="text-sm text-gray-500">Huéspedes</p>
          <p className="font-medium">{bookingDetails.guestCount} {bookingDetails.guestCount === 1 ? 'huésped' : 'huéspedes'}</p>
        </div>
        
        {/* Guest Name */}
        <div className="border-b pb-3">
          <p className="text-sm text-gray-500">Titular de la reserva</p>
          <p className="font-medium">{bookingDetails.guestName}</p>
        </div>
        
        {/* Total Paid */}
        <div className="border-b pb-3">
          <p className="text-sm text-gray-500">Total pagado</p>
          <p className="font-medium">{bookingDetails.totalPrice}€</p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="font-medium mb-2">¿Qué sucede ahora?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Te hemos enviado un correo electrónico a <span className="font-medium">{bookingDetails.guestEmail}</span> con todos los detalles de tu reserva, incluyendo instrucciones para el check-in y la información de contacto.
        </p>
        <p className="text-gray-600 text-sm">
          Si tienes alguna pregunta, no dudes en contactarnos en <a href="mailto:hoseplanvigo@gmail.com" className="text-teal-600 hover:underline">hoseplanvigo@gmail.com</a> o llamando al <a href="tel:+34609352757" className="text-teal-600 hover:underline">+34 609 352 757</a>.
        </p>
      </div>
    </div>
  );
};

export default BookingConfirmation;