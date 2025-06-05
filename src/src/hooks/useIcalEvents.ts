// src/hooks/useIcalEvents.ts

import { useEffect, useState } from 'react';
import ICAL from 'ical.js';

export interface IcalEvent {
  uid: string;
  summary: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  location?: string;
}

export const useIcalEvents = (icalUrl: string) => {
  const [events, setEvents] = useState<IcalEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchIcal = async () => {
      try {
        const res = await fetch(icalUrl);
        const text = await res.text();

        const jcalData = ICAL.parse(text);
        const vcalendar = new ICAL.Component(jcalData);
        const vevents = vcalendar.getAllSubcomponents('vevent');

        const parsedEvents: IcalEvent[] = vevents.map((vevent) => {
          const event = new ICAL.Event(vevent);
          return {
            uid: event.uid,
            summary: event.summary,
            description: event.description,
            startDate: event.startDate.toJSDate(),
            endDate: event.endDate.toJSDate(),
            location: event.location,
          };
        });

        setEvents(parsedEvents);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    fetchIcal();
  }, [icalUrl]);

  return { events, loading, error };
};
