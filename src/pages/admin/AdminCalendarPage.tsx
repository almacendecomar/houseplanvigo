import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar, Plus, RefreshCcw } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { AirbnbCalendar, Booking } from '../../types/admin';

const AdminCalendarPage = () => {
  const [calendars, setCalendars] = useState<AirbnbCalendar[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSync = async () => {
    setIsLoading(true);
    // Implement iCal sync logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleAddCalendar = () => {
    const url = prompt('Enter Airbnb iCal URL:');
    if (url) {
      const newCalendar: AirbnbCalendar = {
        id: Date.now().toString(),
        name: 'Airbnb Calendar',
        url,
        lastSync: new Date()
      };
      setCalendars([...calendars, newCalendar]);
    }
  };

  return (
    <>
      <Helmet>
        <title>Calendar Management | Houseplan Admin</title>
      </Helmet>

      <AdminLayout>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-semibold">Calendar Management</h1>
          <div className="flex space-x-3">
            <button
              onClick={handleSync}
              disabled={isLoading}
              className="btn-primary flex items-center"
            >
              <RefreshCcw size={16} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Sync Calendars
            </button>
            <button
              onClick={handleAddCalendar}
              className="btn-primary flex items-center"
            >
              <Plus size={16} className="mr-2" />
              Add Calendar
            </button>
          </div>
        </div>

        {/* Connected Calendars */}
        <div className="card p-4 mb-6">
          <h2 className="text-lg font-medium mb-4">Connected Calendars</h2>
          {calendars.length === 0 ? (
            <p className="text-gray-500">No calendars connected. Add an Airbnb calendar to get started.</p>
          ) : (
            <div className="space-y-3">
              {calendars.map((calendar) => (
                <div key={calendar.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-teal-600 mr-3" />
                    <div>
                      <p className="font-medium">{calendar.name}</p>
                      <p className="text-sm text-gray-500">Last sync: {calendar.lastSync.toLocaleString()}</p>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Calendar View */}
        <div className="card p-4">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth'
            }}
            events={bookings.map(booking => ({
              id: booking.id,
              title: `${booking.guestName} (${booking.guestCount} guests)`,
              start: booking.startDate,
              end: booking.endDate,
              backgroundColor: booking.source === 'airbnb' ? '#0d9488' : '#3b82f6'
            }))}
            height="auto"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
          />
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminCalendarPage;