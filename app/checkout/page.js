import Checkout from "@/components/checkout/Checkout";
import classes from "./page.module.css";

export const metadata = {
  title: 'Buyurtmani rasmiylashtirish',
};

export default function CheckoutPage() {
  return (
    <div className={classes.main}>
      <h2>Buyurtmani rasmiylashtirish</h2>
      <Checkout />
    </div>
  );
}
