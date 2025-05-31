export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'manager';
  lastLogin?: Date;
}

export interface SeasonalPricing {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  basePrice: number;
  cleaningFee: number;
  minNights: number;
}

export interface SpecialPrice {
  id: string;
  date: Date;
  price: number;
  reason?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  order: number;
  featured: boolean;
}

export interface AirbnbCalendar {
  id: string;
  name: string;
  url: string;
  lastSync: Date;
}

export interface Booking {
  id: string;
  startDate: Date;
  endDate: Date;
  guestName: string;
  guestEmail: string;
  guestCount: number;
  totalPrice: number;
  source: 'airbnb' | 'direct' | 'other';
  status: 'confirmed' | 'pending' | 'cancelled';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}