// Common Types
export interface Property {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  location: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    coordinates: [number, number]; // [latitude, longitude]
  };
  ratings: {
    overall: number;
    totalReviews: number;
    distribution: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
    categories: {
      cleanliness: number;
      accuracy: number;
      checkin: number;
      communication: number;
      location: number;
      value: number;
    };
  };
  amenities: {
    views: string[];
    bathroom: string[];
    bedroom: string[];
    entertainment: string[];
    family: string[];
    heating: string[];
    security: string[];
    internet: string[];
    kitchen: string[];
    location: string[];
    parking: string[];
    accessibility: string[];
    services: string[];
    notIncluded: string[];
  };
  rooms: number;
  beds: number;
  bathrooms: number;
  maxGuests: number;
  pricing: {
    basePrice: number;
    cleaningFee: number;
    minNights: number;
  };
  images: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
  rules: string[];
}

export interface GuestInfo {
  fullName: string;
  email: string;
  phone: string;
  documentType: 'dni' | 'passport' | 'other';
  documentNumber: string;
  documentExpiryDate: string; // Required for police check-in
  dateOfBirth: string; // Required for police check-in
  nationality: string; // Required for police check-in
  placeOfBirth: string; // Required for police check-in
  gender: 'M' | 'F' | 'O'; // Required for police check-in
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  specialRequests?: string;
}

export interface Booking {
  id: string;
  propertyId: string;
  startDate: Date;
  endDate: Date;
  guestCount: number;
  guestInfo: GuestInfo;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt: Date;
  updatedAt: Date;
  policeRegistrationStatus?: 'pending' | 'completed';
  policeRegistrationDate?: Date;
}

export interface AIAssistantMessage {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface AIAssistantConversation {
  id: string;
  messages: AIAssistantMessage[];
  userEmail?: string;
  createdAt: Date;
  updatedAt: Date;
}