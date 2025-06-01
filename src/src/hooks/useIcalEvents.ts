
import { useEffect, useState } from 'react';

interface CalendarEvent {
  title: string;
  start: string;
  end: string;
}

export function useIcalEvents(icsUrl: string): CalendarEvent[] {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    const fetchIcs = async () => {
      try {
        const res = await fetch(icsUrl);
        const text = await res.text();

        const lines = text.split(/\r?\n/);
        const extractedEvents: CalendarEvent[] = [];
        let current: any = {};

        for (const line of lines) {
          if (line.startsWith('BEGIN:VEVENT')) {
            current = {};
          } else if (line.startsWith('SUMMARY:')) {
            current.title = line.substring(8);
          } else if (line.startsWith('DTSTART;VALUE=DATE:')) {
            current.start = line.substring(19);
          } else if (line.startsWith('DTEND;VALUE=DATE:')) {
            current.end = line.substring(17);
          } else if (line.startsWith('END:VEVENT')) {
            if (current.start && current.end) {
              extractedEvents.push({
                title: current.title || 'Reservado',
                start: current.start,
                end: current.end
              });
            }
          }
        }

        setEvents(extractedEvents);
      } catch (error) {
        console.error('Error al cargar el .ics:', error);
      }
    };

    fetchIcs();
  }, [icsUrl]);

  return events;
}

