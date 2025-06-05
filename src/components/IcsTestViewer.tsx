import { useState } from 'react';
import ICAL from 'ical.js';

const rawICS = `BEGIN:VCALENDAR
PRODID:-//Airbnb Inc//Hosting Calendar 1.0//EN
CALSCALE:GREGORIAN
VERSION:2.0
BEGIN:VEVENT
DTSTAMP:20250605T075559Z
DTSTART;VALUE=DATE:20250606
DTEND;VALUE=DATE:20250610
SUMMARY:Reserved
UID:1418fb94e984-584f42167fd9424fa7a5b9c87c26b23c@airbnb.com
DESCRIPTION:Reservation URL: https://www.airbnb.com/hosting/reservations/details/HM5HFWK4B2\\nPhone Number (Last 4 Digits): 5605
END:VEVENT
BEGIN:VEVENT
DTSTAMP:20250605T075559Z
DTSTART;VALUE=DATE:20250617
DTEND;VALUE=DATE:20250620
SUMMARY:Reserved
UID:1418fb94e984-a157ab1f4ed9e92057444c63df5175dc@airbnb.com
DESCRIPTION:Reservation URL: https://www.airbnb.com/hosting/reservations/details/HMMDN2NEH3\\nPhone Number (Last 4 Digits): 2496
END:VEVENT
END:VCALENDAR`;

const IcsTestViewer = () => {
  const [events, setEvents] = useState<any[]>([]);

  const parseIcs = () => {
    try {
      const jcalData = ICAL.parse(rawICS);
      const vcalendar = new ICAL.Component(jcalData);
      const vevents = vcalendar.getAllSubcomponents('vevent');

      const parsedEvents = vevents.map((vevent) => {
        const event = new ICAL.Event(vevent);
        return {
          uid: event.uid,
          summary: event.summary,
          startDate: event.startDate.toJSDate(),
          endDate: event.endDate.toJSDate(),
          description: event.description
        };
      });

      setEvents(parsedEvents);
    } catch (error) {
      console.error('Error al parsear ICS:', error);
      alert('❌ Error al parsear el archivo ICS');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">🧪 Prueba de lectura .ICS</h2>
      <button
        onClick={parseIcs}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Leer reservas desde archivo ICS
      </button>

      {events.length > 0 && (
        <ul className="mt-6 space-y-3">
          {events.map((e, i) => (
            <li key={i} className="border p-4 rounded">
              <p className="font-semibold">📌 {e.summary}</p>
              <p>📅 Desde: {e.startDate.toLocaleDateString()}</p>
              <p>📅 Hasta: {e.endDate.toLocaleDateString()}</p>
              <p className="text-sm mt-1 text-gray-600">{e.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IcsTestViewer;
