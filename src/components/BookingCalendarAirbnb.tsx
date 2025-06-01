
// src/components/BookingCalendarAirbnb.tsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import icalendarPlugin from '@fullcalendar/icalendar';
import '../../styles/fullcalendar.css';

const BookingCalendarAirbnb = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Disponibilidad según Airbnb</h2>

      <FullCalendar
        plugins={[dayGridPlugin, icalendarPlugin]}
        initialView="dayGridMonth"
        events={{
          url: 'https://www.airbnb.es/calendar/ical/44397221.ics?s=d674e41bdb25210ae24b17fc2c27fad0',
          format: 'ics',
        }}
        eventColor="#e11d48"
        height="auto"
      />
    </div>
  );
};

export default BookingCalendarAirbnb;
