import { useState } from 'react';
import { syncCalendar } from '../services/calendarService';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore as db } from '../services/firebase';

const CALENDAR_ID = 'EDpdSWegA0LsQy348O2y';
const CALENDAR_URL =
  'https://www.airbnb.es/calendar/ical/44397221.ics?s=d674e41bdb25210ae24b17fc2c27fad0';

const CalendarDashboard = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSync = async () => {
    setLoading(true);
    setMessage('Sincronizando...');
    try {
      await syncCalendar({
        id: CALENDAR_ID,
        name: 'Airbnb Calendar',
        url: CALENDAR_URL,
        lastSync: new Date(),
        type: 'airbnb',
      });
      setMessage('✅ Calendario sincronizado con éxito');
      await loadBookings();
    } catch (err: any) {
      console.error(err);
      setMessage('❌ Error al sincronizar: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadBookings = async () => {
    const q = query(
      collection(db, 'bookings'),
      where('calendarId', '==', CALENDAR_ID)
    );
    const snapshot = await getDocs(q);
    const docs = snapshot.docs.map((doc) => doc.data());
    setBookings(docs);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Calendario Airbnb</h2>

      <button
        onClick={handleSync}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
        disabled={loading}
      >
        {loading ? 'Sincronizando...' : '🔄 Sincronizar reservas'}
      </button>

      {message && <p className="mb-4 text-sm">{message}</p>}

      <h3 className="text-xl font-semibold mb-2">📅 Reservas sincronizadas:</h3>
      {bookings.length === 0 ? (
        <p>No hay reservas aún. Pulsa sincronizar.</p>
      ) : (
        <ul className="space-y-2">
          {bookings.map((b, i) => (
            <li key={i} className="p-4 border rounded">
              <p className="font-semibold">{b.summary}</p>
              <p>
                Desde: {new Date(b.startDate).toLocaleDateString()} <br />
                Hasta: {new Date(b.endDate).toLocaleDateString()}
              </p>
              {b.description && <p className="text-sm mt-1">{b.description}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarDashboard;
