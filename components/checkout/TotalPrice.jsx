"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import classes from "./Checkout.module.css";

export default function TotalPrice() {
  const totalDiscount = useSelector((state) => state.cart.totalDiscount);
  const totalProduct = useSelector((state) => state.cart.totalProduct);
  return (
    <div className={classes.totalPrice}>
      <div>
        <h3>Buyurtmangiz </h3>
        <Link href={'/cart'}>Savatga o&apos;tish</Link>
      </div>

      <div>
        <p>Mahsulotlar({totalProduct})</p>
        <p>
          {totalDiscount
            ?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })
            .replaceAll(".00", "")
            .replaceAll(",", " ")}{" "}
          so&apos;m
        </p>
      </div>
      <div>
        <p>Yetkazib berish</p>
        <p>bepul</p>
      </div>
      <div>
        <p>Jami</p>
        <h3>
          {totalDiscount
            ?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })
            .replaceAll(".00", "")
            .replaceAll(",", " ")}{" "}
          so&apos;m
        </h3>
      </div>

      <button style={{backgroundColor: `${totalDiscount > 0 ? '#7f4dff' : 'rgb(160, 160, 160)'} `}}>To&apos;lov qilish</button>
    </div>
  );
}
