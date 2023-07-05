import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51NPiprSCc9IYYaIDJpbHlGpTrsF7l1nRz6bsTBZY280AQGHUvle9wbEL6IzL2ZVUQgxn1OAsdaXOS3xRqAOhxpW600dOeGoK8x";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

export default StripeContainer;
