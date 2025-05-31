import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Booking, GuestInfo } from '../types';

export const createBooking = async (bookingData: Omit<Booking, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      ...bookingData,
      createdAt: new Date(),
      updatedAt: new Date(),
      policeRegistrationStatus: 'pending'
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const updateBookingStatus = async (bookingId: string, status: Booking['status']) => {
  try {
    const bookingRef = doc(db, 'bookings', bookingId);
    await updateDoc(bookingRef, {
      status,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating booking status:', error);
    throw error;
  }
};

export const updatePoliceRegistrationStatus = async (bookingId: string, status: 'completed') => {
  try {
    const bookingRef = doc(db, 'bookings', bookingId);
    await updateDoc(bookingRef, {
      policeRegistrationStatus: status,
      policeRegistrationDate: new Date(),
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating police registration status:', error);
    throw error;
  }
};

export const getBooking = async (bookingId: string): Promise<Booking | null> => {
  try {
    const bookingRef = doc(db, 'bookings', bookingId);
    const bookingSnap = await getDoc(bookingRef);
    
    if (bookingSnap.exists()) {
      return { id: bookingSnap.id, ...bookingSnap.data() } as Booking;
    }
    return null;
  } catch (error) {
    console.error('Error getting booking:', error);
    throw error;
  }
};