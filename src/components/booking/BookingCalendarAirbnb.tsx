// src/components/booking/BookingCalendarAirbnb.tsx
import { useEffect, useState } from 'react';

const BookingCalendarAirbnb = () => {
  const [icalData, setIcalData] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcs = async () => {
      try {
        const response = await fetch('https://www.airbnb.es/calendar/ical/44397221.ics?s=d674e41bdb25210ae24b17fc2c27fad0');
        const text = await response.text();
        setIcalData(text);
      } catch (error) {
        console.error('Error al cargar el calendario Airbnb:', error);
      }
    };

    fetchIcs();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-teal-700 mb-4">📅 Fechas desde Airbnb (formato .ics)</h1>
      {icalData ? (
        <pre className="bg-gray-100 p-4 text-sm overflow-x-auto whitespace-pre-wrap rounded shadow">
          {icalData}
        </pre>
      ) : (
        <p className="text-gray-600">Cargando calendario...</p>
      )}
    </div>
  );
};

export default BookingCalendarAirbnb;
