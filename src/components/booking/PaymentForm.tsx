import { PayPalButtons } from "@paypal/react-paypal-js";

interface PaymentFormProps {
  amount: number;
  onPaymentSuccess: (details: any) => void;
  onPaymentError: (error: any) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  amount,
  onPaymentSuccess,
  onPaymentError
}) => {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-medium mb-6">Realizar pago</h3>
      
      <div className="mb-6">
        <p className="text-center text-xl font-medium mb-2">Total a pagar: {amount}€</p>
        <p className="text-center text-sm text-gray-500 mb-4">
          Pago seguro a través de PayPal o tarjeta de crédito
        </p>
      </div>
      
      <div className="border-b pb-4 mb-4">
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "EUR",
                    value: amount.toString(),
                  },
                  description: "Reserva en Houseplan"
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            if (actions.order) {
              const details = await actions.order.capture();
              onPaymentSuccess(details);
            }
          }}
          onError={(err) => {
            onPaymentError(err);
          }}
        />
      </div>
      
      <div className="flex justify-center items-center space-x-4 mt-4">
        <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal and Credit Card" width="74" height="46" />
        <div className="text-sm text-gray-500">
          <p>Pago 100% seguro</p>
          <p>Tus datos están protegidos</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;