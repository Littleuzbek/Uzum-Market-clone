"use client";

import Image from "next/image";
import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const onlyBuyItem = useSelector((state) => state.cart.onlyBuy);
  const items = onlyBuyItem ? onlyBuyItem : cart;
  return (
    <>
      <div className={classes.deliveringItems}>
        {items?.map((product) => (
          <div key={product?.id}>
            <Image src={product?.image} sizes="auto" fill alt="" />
            <div>
              <p>{product?.name}</p>
              <div className={classes.itemInfo}>
                <div>
                  <span className={classes.pickedColor}>
                    Sotuvchi: <p>Uzum market</p>
                  </span>
                  {product?.color && (
                    <span className={classes.pickedColor}>
                      Rang: <p>{product?.color}</p>
                    </span>
                  )}
                  {product?.size && (
                    <span className={classes.pickedColor}>
                      O&apos;lcham: <p>{product?.size}</p>
                    </span>
                  )}
                </div>
                <div>
                  Miqdor: <p>{product?.quantity} dona</p>
                </div>
                <div className={classes.price}>
                  {product?.totalDiscount
                    ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                    .split('.')[0]
                    .replaceAll(",", " ")}{" "}
                  so&apos;m
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.deliveringItemsMobile}>
        {items?.map((product) => (
          <div key={product?.id}>
            <Image src={product?.image} sizes="auto" fill alt="" />
            <div>
              <p>{product?.name}</p>
              <span>
                Sotuvchi: <p>Uzum Market</p>
              </span>
              {product?.color && (
                <span>
                  Rang: <p>{product?.color}</p>
                </span>
              )}
              {product?.size && (
                <span>
                  O&apos;lcham: <p>{product?.size}</p>
                </span>
              )}
              <div className={classes.infoBlock}>
                <span>
                  Miqdor: <p>{product?.quantity} dona</p>
                </span>

                <p>{product?.totalDiscount
                 ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                 .split('.')[0]
                 .replaceAll(",", " ")} so&apos;m</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
