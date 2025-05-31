import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format, addDays, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { Users } from 'lucide-react';
import { propertyData, availabilityData } from '../../data/propertyData';

interface BookingCalendarProps {
  onBookingDataChange: (data: {
    startDate: Date | null;
    endDate: Date | null;
    guestCount: number;
    totalNights: number;
    totalPrice: number;
  }) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ onBookingDataChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guestCount, setGuestCount] = useState<number>(2);
  
  const minDate = new Date();
  const maxDate = addDays(new Date(), 365); // Allow bookings up to 1 year in advance
  const maxGuestCount = propertyData.maxGuests;
  const minGuestCount = 1;
  
  // Filter out dates that are not available
  const excludeDates = Object.entries(availabilityData)
    .filter(([_, isAvailable]) => !isAvailable)
    .map(([dateStr]) => new Date(dateStr));

  // Calculate total nights and price
  const totalNights = startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const basePrice = propertyData.pricing.basePrice;
  const cleaningFee = propertyData.pricing.cleaningFee;
  const totalPrice = totalNights > 0 ? (totalNights * basePrice) + cleaningFee : 0;

  // Handle date selection
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    
    // Validate minimum nights
    if (start && end) {
      const nights = differenceInDays(end, start);
      if (nights < propertyData.pricing.minNights) {
        return;
      }
    }
    
    setStartDate(start);
    setEndDate(end);
    
    // Notify parent component of changes
    onBookingDataChange({
      startDate: start,
      endDate: end,
      guestCount,
      totalNights: start && end ? differenceInDays(end, start) : 0,
      totalPrice: start && end ? (differenceInDays(end, start) * basePrice) + cleaningFee : 0
    });
  };

  // Handle guest count change
  const handleGuestCountChange = (count: number) => {
    const newCount = Math.min(Math.max(count, minGuestCount), maxGuestCount);
    setGuestCount(newCount);
    
    // Notify parent component of changes
    onBookingDataChange({
      startDate,
      endDate,
      guestCount: newCount,
      totalNights,
      totalPrice
    });
  };

  // Custom day rendering for the calendar
  const renderDayContents = (day: number, date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const isAvailable = availabilityData[dateStr] !== false;
    
    return (
      <div 
        className={`relative p-2 ${!isAvailable ? 'text-gray-300' : ''}`}
        title={isAvailable ? `${basePrice}€ por noche` : 'No disponible'}
      >
        <span>{day}</span>
        {isAvailable && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <span className="text-xs font-medium text-teal-600">{basePrice}€</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="card p-6">
      <h3 className="text-xl font-medium mb-4">Selecciona fechas y huéspedes</h3>
      
      {/* Date Selection */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Fechas de estancia</label>
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={minDate}
            maxDate={maxDate}
            excludeDates={excludeDates}
            dateFormat="dd/MM/yyyy"
            monthsShown={2}
            locale={es}
            placeholderText="Selecciona fechas de entrada y salida"
            className="w-full"
            calendarClassName="bg-white shadow-lg rounded-lg border-0"
            renderDayContents={renderDayContents}
            showPopperArrow={false}
            inline
          />
        </div>
        {propertyData.pricing.minNights > 1 && (
          <p className="text-sm text-gray-500 mt-1">
            Estancia mínima: {propertyData.pricing.minNights} noches
          </p>
        )}
      </div>
      
      {/* Guest Count */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Número de huéspedes</label>
        <div className="relative">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => handleGuestCountChange(guestCount - 1)}
              disabled={guestCount <= minGuestCount}
              className="px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-700 disabled:opacity-50"
            >
              -
            </button>
            <div className="flex-1 border-t border-b border-gray-300 py-2 px-3 bg-white text-center">
              {guestCount} {guestCount === 1 ? 'huésped' : 'huéspedes'}
            </div>
            <button
              type="button"
              onClick={() => handleGuestCountChange(guestCount + 1)}
              disabled={guestCount >= maxGuestCount}
              className="px-3 py-2 border border-gray-300 rounded-r-lg bg-gray-50 text-gray-700 disabled:opacity-50"
            >
              +
            </button>
          </div>
          <Users className="absolute left-10 top-3 text-gray-500" size={18} />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Máximo {maxGuestCount} huéspedes
        </p>
      </div>
      
      {/* Price Summary */}
      {startDate && endDate && totalNights > 0 && (
        <div className="border-t pt-4 mt-4">
          <h4 className="font-medium text-lg mb-3">Resumen de precios</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>
                {basePrice}€ x {totalNights} {totalNights === 1 ? 'noche' : 'noches'}
              </span>
              <span>{basePrice * totalNights}€</span>
            </div>
            <div className="flex justify-between">
              <span>Tarifa de limpieza</span>
              <span>{cleaningFee}€</span>
            </div>
            <div className="flex justify-between font-medium text-lg pt-2 border-t mt-2">
              <span>Total</span>
              <span>{totalPrice}€</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;