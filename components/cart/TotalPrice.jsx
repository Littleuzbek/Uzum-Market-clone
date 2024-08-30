import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import Link from "next/link";

export default function TotalPrice({ months }) {
  const deliveryDate = new Date().getDate() + 1;
  const deliveryMonth = new Date().getMonth() + (deliveryDate > 31 ? 1 : 0);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalDiscount = useSelector((state) => state.cart.totalDiscount);

  return (
    <div className={classes.totalPriceContainer}>
      <h3>Buyurtmangiz</h3>
      <div className={classes.realPrice}>
        <p>Mahsulotlaringiz</p>
        <p>
          {totalPrice
            .toLocaleString("en-US", { minimumFractionDigits: 2 })
            .split('.')[0]
            .replaceAll(",", " ")}{" "}
          so&apos;m
        </p>
      </div>
      <div className={classes.deliveryDate}>
        Yetkazib berish {deliveryDate > 31 ? "1" : deliveryDate}-
        {months[deliveryMonth]} (Ertaga)
      </div>
      <div className={classes.totalPrice}>
        <p>Jami</p>
        <div>
          <p>
            {totalDiscount
              .toLocaleString("en-US", { minimumFractionDigits: 2 })
              .split('.')[0]
              .replaceAll(",", " ")}{" "}
            so&apos;m
          </p>
          <p>
            Tejovingiz:{" "}
            {(totalPrice - totalDiscount)
              .toLocaleString("en-US", { minimumFractionDigits: 2 })
              .split('.')[0]
              .replaceAll(",", " ")}{" "}
            so&apos;m
          </p>
        </div>
      </div>
      <Link href={'/checkout'} className={classes.checkoutBtn}>
        <button className={classes.buyBtn}>Rasmiylashtirishga o&apos;tish</button>
      </Link>

      <div className={classes.checkoutMobileContainer}>
        <div>
          <p>Buyurtmangiz</p>
          {totalDiscount
          .toLocaleString("en-US", { minimumFractionDigits: 2 })
          .split('.')[0]
          .replaceAll(",", " ")} so&apos;m
        </div>
      <Link href={'/checkout'} className={classes.checkoutMobileBtn}>
        <button className={classes.buyBtn}>Rasmiylashtirish</button>
      </Link>
      </div>
    </div>
  );
}
