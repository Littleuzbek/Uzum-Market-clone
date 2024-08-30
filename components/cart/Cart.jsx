"use client";


import { Fragment } from "react";
import classes from "./Cart.module.css";
import TotalPrice from "./TotalPrice";
import ItemsNone from "./ItemsNone";
import { useSelector } from "react-redux";
import AboutItem from "./AboutItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalProduct = useSelector((state) => state.cart.totalProduct);
  const deliveryDate = new Date().getDate() + 1;
  const deliveryMonth = new Date().getMonth() + (deliveryDate > 31 ? 1 : 0);
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  return (
    <Fragment>
      {cart.length === 0 ? (
        <ItemsNone />
      ) : (
        <Fragment>
          <h2>Savatingiz, {totalProduct} mahsulot</h2>
          <div className={classes.cartContainer}>
            <div className={classes.items}>
              <div className={classes.chooseAll}>
                <div>Barcha mahsulotlar</div>
                <span>
                  Yetkazib berish eng yaqin sanasi:{" "}
                  <p>
                    {deliveryDate > 31 ? "1" : deliveryDate}-
                    {months[deliveryMonth]}
                  </p>{" "}
                </span>
              </div>
              {cart?.map((product) => (
                <div className={classes.item} key={product.cartItemId}>
                  <h3 className={classes.delivery}>
                    {deliveryDate > 31 ? "1" : deliveryDate}-
                    {months[deliveryMonth]} orasida yetkazamiz
                  </h3>
                  <div className={classes.itemContainer}>
                   <AboutItem product={product}/>
                  </div>
                </div>
              ))}
            </div>
            <TotalPrice
              months={months}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
