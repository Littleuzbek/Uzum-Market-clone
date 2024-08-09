"use client";

import { BsTrash3Fill } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Fragment, useEffect } from "react";
import Image from "next/image";
import classes from "./Cart.module.css";
import TotalPrice from "./TotalPrice";
import ItemsNone from "./ItemsNone";
import Link from "next/link";
import { getItem } from "./store/LocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./store/CartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalDiscount = useSelector((state) => state.cart.totalDiscount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalProduct = useSelector((state) => state.cart.totalProduct);
  const firstReload = useSelector((state) => state.cart.firstReload);
  const deliveryDate = new Date().getDate() + 1;
  const deliveryMonth = new Date().getMonth() + (deliveryDate > 31 ? 1 : 0);
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (cart.length === 0) {
      if (!firstReload) {
        const { localData } = getItem("cart");
        const { localData: totalDiscount } = getItem("totalDiscount");
        const { localData: totalPrice } = getItem("totalPrice");
        const { localData: totalProduct } = getItem("totalProduct");

        dispatch(
          cartAction.setLocalStorageItems({
            cart: JSON.parse(localData) || [],
            firstReload: true,
          })
        );
        dispatch(
          cartAction.setSum({
            totalDiscount: JSON.parse(totalDiscount),
            totalPrice: JSON.parse(totalPrice),
            totalProduct: JSON.parse(totalProduct),
          })
        );
      }
    }
  }, [cart.length, dispatch]);

  const amountHandler = (action, product) => {
    if (action === "delete") {
      dispatch(cartAction.removeItem({ product: product, delete: action }));
    }

    if (action === "-") {
      if (product.quantity !== 1) {
        dispatch(cartAction.removeItem(product));
      }
    }

    if (action === "+") {
      const newItem = {
        discount: product.discount,
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating,
        specs: product.specs,
        quantity: 1,
        color: product.color,
      };

      dispatch(cartAction.addItem(newItem));
    }
  };

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
                <div>
                  <input type="checkbox" />
                  <p>Hammasini tanlash</p>
                </div>
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
                  <div className={classes.aboutItem}>
                    <input type="checkbox" name="" id="" />
                    <Image
                      src={product.image}
                      alt=""
                      className={classes.image}
                    />
                    <div className={classes.wrapContainer}>
                      <Link
                        href={`/product/${product?.id} ${product?.name}`}
                        className={classes.productName}
                      >
                        <p>{product.name}</p>
                      </Link>
                      <div
                        className={classes.deleteBtn}
                        onClick={() => amountHandler("delete", product)}
                      >
                        <BsTrash3Fill className={classes.trashIcon} /> Yo&apos;q
                        qilish
                      </div>
                      <div>
                        <span className={classes.ownerName}>
                          Sotuvchi: <p> Shodiyor komp</p>
                        </span>
                        {product.color && (
                          <span className={classes.pickedColor}>
                            Rang: <p>{product.color}</p>
                          </span>
                        )}
                      </div>
                      <div className={classes.amount}>
                        <button
                          style={
                            product.quantity === 1
                              ? {
                                  color: "rgb(177, 177, 177)",
                                  cursor: "default",
                                }
                              : {}
                          }
                          onClick={() => amountHandler("-", product)}
                        >
                          <FaMinus>-</FaMinus>
                        </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => amountHandler("+", product)}>
                          <FaPlus>+</FaPlus>
                        </button>
                      </div>
                      <div className={classes.price}>
                        <p>
                          {product.totalDiscount
                            ?.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                            })
                            .replaceAll(".00", "")
                            .replaceAll(",", " ")}
                        </p>
                        <s>
                          {product.totalPrice
                            ?.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                            })
                            .replaceAll(".00", "")
                            .replaceAll(",", " ")}
                        </s>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <TotalPrice
              totalDiscount={totalDiscount}
              totalPrice={totalPrice}
              months={months}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
