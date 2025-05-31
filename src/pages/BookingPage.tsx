import { useState } from 'react';
import { Helmet } from 'react-helmet';
import BookingCalendar from '../components/booking/BookingCalendar';
import GuestInfoForm from '../components/booking/GuestInfoForm';
import PaymentForm from '../components/booking/PaymentForm';
import BookingConfirmation from '../components/booking/BookingConfirmation';
import SectionTitle from '../components/common/SectionTitle';
import { GuestInfo } from '../types';

// Booking steps
enum BookingStep {
  DATES_AND_GUESTS = 1,
  GUEST_INFO = 2,
  PAYMENT = 3,
  CONFIRMATION = 4
}

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>(BookingStep.DATES_AND_GUESTS);
  const [bookingData, setBookingData] = useState({
    startDate: null as Date | null,
    endDate: null as Date | null,
    guestCount: 2,
    totalNights: 0,
    totalPrice: 0
  });
  const [guestInfo, setGuestInfo] = useState<GuestInfo | null>(null);
  const [bookingId, setBookingId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingDataChange = (data: any) => {
    setBookingData(data);
  };

  const handleGuestInfoSubmit = (data: GuestInfo) => {
    setGuestInfo(data);
    setCurrentStep(BookingStep.PAYMENT);
  };

  const handlePaymentSuccess = (details: any) => {
    // Generate booking ID
    const newBookingId = `HP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(newBookingId);
    setCurrentStep(BookingStep.CONFIRMATION);
  };

  const handlePaymentError = (error: any) => {
    console.error('Payment error:', error);
    alert('Ha ocurrido un error con el pago. Por favor, inténtalo de nuevo.');
  };

  const canProceedToGuestInfo = bookingData.startDate && bookingData.endDate && bookingData.totalNights > 0;

  return (
    <>
      <Helmet>
        <title>Reservar | Houseplan</title>
        <meta name="description" content="Reserva tu estancia en Houseplan. Selecciona fechas, introduce tus datos y disfruta de una experiencia única en nuestro alojamiento." />
      </Helmet>
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Reserva tu estancia"
            subtitle="Selecciona las fechas, introduce tus datos y realiza el pago de forma segura"
            center={true}
          />
          
          {/* Steps indicator */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              {[
                'Fechas y huéspedes',
                'Datos del huésped',
                'Pago',
                'Confirmación'
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index + 1 === currentStep 
                      ? 'bg-teal-600 text-white'
                      : index + 1 < currentStep
                        ? 'bg-teal-100 text-teal-600'
                        : 'bg-gray-200 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`text-xs mt-1 ${
                    index + 1 === currentStep 
                      ? 'text-teal-600 font-medium'
                      : index + 1 < currentStep
                        ? 'text-teal-600'
                        : 'text-gray-400'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {currentStep === BookingStep.DATES_AND_GUESTS && (
              <div>
                <BookingCalendar onBookingDataChange={handleBookingDataChange} />
                
                {canProceedToGuestInfo && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setCurrentStep(BookingStep.GUEST_INFO)}
                      className="btn-primary"
                    >
                      Continuar
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {currentStep === BookingStep.GUEST_INFO && (
              <div>
                <GuestInfoForm 
                  onSubmit={handleGuestInfoSubmit}
                  isSubmitting={isSubmitting}
                />
                
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setCurrentStep(BookingStep.DATES_AND_GUESTS)}
                    className="text-teal-600 hover:text-teal-800 underline"
                  >
                    Volver a fechas y huéspedes
                  </button>
                </div>
              </div>
            )}
            
            {currentStep === BookingStep.PAYMENT && bookingData.totalPrice > 0 && (
              <div>
                <PaymentForm
                  amount={bookingData.totalPrice}
                  onPaymentSuccess={handlePaymentSuccess}
                  onPaymentError={handlePaymentError}
                />
                
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setCurrentStep(BookingStep.GUEST_INFO)}
                    className="text-teal-600 hover:text-teal-800 underline"
                  >
                    Volver a datos del huésped
                  </button>
                </div>
              </div>
            )}
            
            {currentStep === BookingStep.CONFIRMATION && guestInfo && (
              <BookingConfirmation 
                bookingDetails={{
                  id: bookingId,
                  startDate: bookingData.startDate!,
                  endDate: bookingData.endDate!,
                  guestCount: bookingData.guestCount,
                  totalPrice: bookingData.totalPrice,
                  guestName: guestInfo.fullName,
                  guestEmail: guestInfo.email
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;