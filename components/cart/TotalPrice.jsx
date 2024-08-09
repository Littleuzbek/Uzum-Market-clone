import classes from "./Cart.module.css";

export default function TotalPrice({ totalDiscount, totalPrice, months }) {
  const deliveryDate = new Date().getDate() + 1;
  const deliveryMonth = new Date().getMonth() + (deliveryDate > 31 ? 1 : 0);


  return (
    <div className={classes.totalPriceContainer}>
      <h3>Buyurtmangiz</h3>
      <div className={classes.realPrice}>
        <p>Mahsulotlaringiz</p>
        <p>
          {totalPrice
            .toLocaleString("en-US", { minimumFractionDigits: 2 })
            .replaceAll(".00", "")
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
              .replaceAll(".00", "")
              .replaceAll(",", " ")}{" "}
            so&apos;m
          </p>
          <p>
            Tejovingiz:{" "}
            {(totalPrice - totalDiscount)
              .toLocaleString("en-US", { minimumFractionDigits: 2 })
              .replaceAll(".00", "")
              .replaceAll(",", " ")}{" "}
            so&apos;m
          </p>
        </div>
      </div>
      <button className={classes.buyBtn}>Rasmiylashtirishga o&apos;tish</button>
    </div>
  );
}
