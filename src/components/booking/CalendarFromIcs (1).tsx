
// src/components/booking/CalendarFromIcs.tsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useIcalEvents } from '../../hooks/useIcalEvents';
import '../../styles/fullcalendar.css';

const CalendarFromIcs = () => {
  const events = useIcalEvents('https://www.airbnb.es/calendar/ical/44397221.ics?s=d674e41bdb25210ae24b17fc2c27fad0');

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Calendario desde Airbnb (.ics)</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventColor="#e11d48"
        height="auto"
      />
    </div>
  );
};

export default CalendarFromIcs;
