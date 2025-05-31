import { useForm } from 'react-hook-form';
import { GuestInfo } from '../../types';

interface GuestInfoFormProps {
  onSubmit: (data: GuestInfo) => void;
  isSubmitting: boolean;
}

const GuestInfoForm: React.FC<GuestInfoFormProps> = ({ onSubmit, isSubmitting }) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<GuestInfo>({
    defaultValues: {
      documentType: 'dni'
    }
  });

  return (
    <div className="card p-6">
      <h3 className="text-xl font-medium mb-4">Información del huésped</h3>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-gray-700 mb-1 font-medium">
              Nombre completo <span className="text-coral-600">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              className={`input-field ${errors.fullName ? 'border-coral-500 focus:ring-coral-500' : ''}`}
              {...register('fullName', { required: 'Este campo es obligatorio' })}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-coral-600">{errors.fullName.message}</p>
            )}
          </div>
          
          {/* Date of Birth */}
          <div>
            <label htmlFor="dateOfBirth" className="block text-gray-700 mb-1 font-medium">
              Fecha de nacimiento <span className="text-coral-600">*</span>
            </label>
            <input
              id="dateOfBirth"
              type="date"
              className={`input-field ${errors.dateOfBirth ? 'border-coral-500 focus:ring-coral-500' : ''}`}
              {...register('dateOfBirth', { required: 'Este campo es obligatorio' })}
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-sm text-coral-600">{errors.dateOfBirth.message}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-gray-700 mb-1 font-medium">
              Género <span className="text-coral-600">*</span>
            </label>
            <select
              id="gender"
              className={`input-field ${errors.gender ? 'border-coral-500 focus:ring-coral-500' : ''}`}
              {...register('gender', { required: 'Este campo es obligatorio' })}
            >
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-sm text-coral-600">{errors.gender.message}</p>
            )}
          </div>

          {/* Nationality */}
          <div>
            <label htmlFor="nationality" className="block text-gray-700 mb-1 font-medium">
              Nacionalidad <span className="text-coral-600">*</span>
            </label>
            <input
              id="nationality"
              type="text"
              className={`input-field ${errors.nationality ? 'border-coral-500 focus:ring-coral-500' : ''}`}
              {...register('nationality', { required: 'Este campo es obligatorio' })}
            />
            {errors.nationality && (
              <p className="mt-1 text-sm text-coral-600">{errors.nationality.message}</p>
            )}
          </div>

          {/* Place of Birth */}
          <div>
            <label htmlFor="placeOfBirth" className="block text-gray-700 mb-1 font-medium">
              Lugar de nacimiento <span className="text-coral-600">*</span>
            </label>
            <input
              id="placeOfBirth"
              type="text"
              className={`input-field ${errors.placeOfBirth ? 'border-coral-500 focus:ring-coral-500' : ''}`}
              {...register('placeOfBirth', { required: 'Este campo es obligatorio' })}
            />
            {errors.placeOfBirth && (
              <p className="mt-1 text-sm text-coral-600">{errors.placeOfBirth.message}</p>
            )}
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
              Email <span className="text-coral-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`input-field ${errors.email ? 'border-coral-500 focus:ring-coral-500' : ''}`}
              {...register('email', { 
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Dirección de email inválida'
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-coral-600">{errors.email.message}</p>
            )}
          </div>
          
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
              Teléfono <span className="text-coral-600">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              className={`input-field ${errors.phone ? 'border-coral-500 focus:ring-coral-500' : ''}`}
              {...register('phone', { 
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^[0-9+\s()-]{7,15}$/,
                  message: 'Número de teléfono inválido'
                }
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-coral-600">{errors.phone.message}</p>
            )}
          </div>
          
          {/* Document Type and Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="documentType" className="block text-gray-700 mb-1 font-medium">
                Tipo de documento <span className="text-coral-600">*</span>
              </label>
              <select
                id="documentType"
                className="input-field"
                {...register('documentType', { required: true })}
              >
                <option value="dni">DNI</option>
                <option value="passport">Pasaporte</option>
                <option value="other">Otro</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="documentNumber" className="block text-gray-700 mb-1 font-medium">
                Número de documento <span className="text-coral-600">*</span>
              </label>
              <input
                id="documentNumber"
                type="text"
                className={`input-field ${errors.documentNumber ? 'border-coral-500 focus:ring-coral-500' : ''}`}
                {...register('documentNumber', { required: 'Este campo es obligatorio' })}
              />
              {errors.documentNumber && (
                <p className="mt-1 text-sm text-coral-600">{errors.documentNumber.message}</p>
              )}
            </div>
          </div>

          {/* Document Expiry Date */}
          <div>
            <label htmlFor="documentExpiryDate" className="block text-gray-700 mb-1 font-medium">
              Fecha de caducidad del documento <span className="text-coral-600">*</span>
            </label>
            <input
              id="documentExpiryDate"
              type="date"
              className={`input-field ${errors.documentExpiryDate ? 'border-coral-500 focus:ring-coral-500' : ''}`}
              {...register('documentExpiryDate', { required: 'Este campo es obligatorio' })}
            />
            {errors.documentExpiryDate && (
              <p className="mt-1 text-sm text-coral-600">{errors.documentExpiryDate.message}</p>
            )}
          </div>
          
          {/* Address */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Dirección</h4>
            
            <div>
              <label htmlFor="street" className="block text-gray-700 mb-1 font-medium">
                Calle y número <span className="text-coral-600">*</span>
              </label>
              <input
                id="street"
                type="text"
                className={`input-field ${errors.address?.street ? 'border-coral-500 focus:ring-coral-500' : ''}`}
                {...register('address.street', { required: 'Este campo es obligatorio' })}
              />
              {errors.address?.street && (
                <p className="mt-1 text-sm text-coral-600">{errors.address.street.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-gray-700 mb-1 font-medium">
                  Ciudad <span className="text-coral-600">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  className={`input-field ${errors.address?.city ? 'border-coral-500 focus:ring-coral-500' : ''}`}
                  {...register('address.city', { required: 'Este campo es obligatorio' })}
                />
                {errors.address?.city && (
                  <p className="mt-1 text-sm text-coral-600">{errors.address.city.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="postalCode" className="block text-gray-700 mb-1 font-medium">
                  Código postal <span className="text-coral-600">*</span>
                </label>
                <input
                  id="postalCode"
                  type="text"
                  className={`input-field ${errors.address?.postalCode ? 'border-coral-500 focus:ring-coral-500' : ''}`}
                  {...register('address.postalCode', { required: 'Este campo es obligatorio' })}
                />
                {errors.address?.postalCode && (
                  <p className="mt-1 text-sm text-coral-600">{errors.address.postalCode.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="country" className="block text-gray-700 mb-1 font-medium">
                País <span className="text-coral-600">*</span>
              </label>
              <input
                id="country"
                type="text"
                className={`input-field ${errors.address?.country ? 'border-coral-500 focus:ring-coral-500' : ''}`}
                {...register('address.country', { required: 'Este campo es obligatorio' })}
              />
              {errors.address?.country && (
                <p className="mt-1 text-sm text-coral-600">{errors.address.country.message}</p>
              )}
            </div>
          </div>
          
          {/* Special Requests */}
          <div>
            <label htmlFor="specialRequests" className="block text-gray-700 mb-1 font-medium">
              Peticiones especiales
            </label>
            <textarea
              id="specialRequests"
              className="input-field h-24"
              placeholder="Si tienes alguna petición especial, háganoslo saber"
              {...register('specialRequests')}
            ></textarea>
          </div>
          
          {/* Privacy Policy Agreement */}
          <div className="mt-6">
            <div className="flex items-start">
              <input
                id="privacy"
                type="checkbox"
                className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500 mt-1"
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                He leído y acepto la <a href="/privacidad" target="_blank" className="text-teal-600 hover:text-teal-800">política de privacidad</a> y el <a href="/aviso-legal" target=\"_blank" className="text-teal-600 hover:text-teal-800">aviso legal</a>.
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary mt-6"
          >
            {isSubmitting ? 'Procesando...' : 'Continuar a pago'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuestInfoForm;