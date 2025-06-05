// src/services/calendarService.ts

import axios from 'axios';
import { firestore as db } from '../firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import ICAL from 'ical.js';

export const syncAirbnbCalendar = async (calendarId: string, url: string): Promise<void> => {
  try {
    const response = await axios.get(url);
    if (!response.data) throw new Error('No se pudo obtener el archivo ICS');

    const jcalData = ICAL.parse(response.data);
    const vcalendar = new ICAL.Component(jcalData);
    const vevents = vcalendar.getAllSubcomponents('vevent');

    const events = vevents.map((vevent) => {
      const event = new ICAL.Event(vevent);
      return {
        uid: event.uid,
        summary: event.summary,
        startDate: event.startDate.toJSDate(),
        endDate: event.endDate.toJSDate(),
        description: event.description,
        calendarId,
        lastUpdated: new Date(),
        source: 'airbnb',
        status: 'confirmed',
      };
    });

    const bookingsRef = collection(db, 'bookings');
    const existing = await getDocs(query(bookingsRef, where('calendarId', '==', calendarId)));
    const deletes = existing.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletes);

    const adds = events.map((ev) => addDoc(bookingsRef, ev));
    await Promise.all(adds);

    await updateDoc(doc(db, 'calendars', calendarId), { lastSync: new Date() });
  } catch (err) {
    console.error('Error al sincronizar calendario:', err);
    throw err;
  }
};
