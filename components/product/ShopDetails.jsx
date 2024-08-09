"use client";

import { FaMinus } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import classes from "./ShopDetails.module.css";
import {
  CashIcon,
  HumoCartIcon,
  MasterCartIcon,
  UzCardIcon,
  UzumBankIcon,
  UzumNasiyaIcon,
  VisaCartIcon,
} from "./icons/icons";
import { useDispatch } from "react-redux";
import { cartAction } from "../cart/store/CartSlice";

export default function ShopDetails({ productDetails }) {
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState("Oq");
  const dispatch = useDispatch();

  const amountHandler = (action) => {
    if (action === "-") {
      return quantity === 1 ? "" : setQuantity((prevN) => prevN - 1);
    }

    if (action === "+") {
      setQuantity((prevN) => prevN + 1);
    }
  };

  const addToCart = () => {
    const addingItem = {
      discount: productDetails.discount,
      id: productDetails.id,
      name: productDetails.name,
      image: productDetails.image,
      price: productDetails.price,
      rating: productDetails.rating,
      specs: productDetails.specs,
      quantity: quantity,
      color: activeColor,
    };

    dispatch(cartAction.addItem(addingItem))
  };

  return (
    <div className={classes.shopDetails}>
      <div className={classes.shopping}>
        <div className={classes.pickColor}>
          <span>
            Rang: <p>{activeColor}</p>
          </span>
          <div>
            <span
              className={activeColor === "Oq" ? classes.active : {}}
              onClick={() => setActiveColor("Oq")}
            >
              <div></div>
            </span>
            <span
              className={activeColor === "Qora" ? classes.active : {}}
              onClick={() => setActiveColor("Qora")}
            >
              <div></div>
            </span>
            <span
              className={activeColor === "Ko'k" ? classes.active : {}}
              onClick={() => setActiveColor("Ko'k")}
            >
              <div></div>
            </span>
            <span
              className={activeColor === "Jigar rang" ? classes.active : {}}
              onClick={() => setActiveColor("Jigar rang")}
            >
              <div></div>
            </span>
          </div>
        </div>
        <div className={classes.amountContainer}>
          <p>Miqdor:</p>
          <div className={classes.amount}>
            <button
              style={
                quantity === 1
                  ? { color: "rgb(177, 177, 177)", cursor: "default" }
                  : {}
              }
            >
              <FaMinus onClick={() => amountHandler("-")}>-</FaMinus>
            </button>
            <p>{quantity}</p>
            <button>
              <FaPlus onClick={() => amountHandler("+")}>+</FaPlus>
            </button>
          </div>
        </div>
        <div className={classes.priceContainer}>
          <p>Narx:</p>
          <div className={classes.price}>
            <p>
              {(Number(productDetails?.discount.replaceAll(" ", "")) * quantity)
                .toLocaleString("en-US", { minimumFractionDigits: 2 })
                .replaceAll(".00", "")
                .replaceAll(",", " ")}
            </p>
            <s>
              {(Number(productDetails?.price.replaceAll(" ", "")) * quantity)
                .toLocaleString("en-US", { minimumFractionDigits: 2 })
                .replaceAll(".00", "")
                .replaceAll(",", " ")}
            </s>
          </div>
        </div>
        <p className={classes.credit}>
          <span>
            Oyiga{" "}
            {Math.floor(
              Number(productDetails?.discount.replaceAll(" ", "")) / 12
            )
              .toLocaleString("en-US", { minimumFractionDigits: 2 })
              .replaceAll(".00", "")
              .replaceAll(",", " ")}{" "}
            so'mdan
          </span>
          muddatli to'lov
        </p>
        <div className={classes.btnContainer}>
          <button
            onClick={() => {
              addToCart();
            }}
          >
            Savatga qo'shish
          </button>
          <button>Xarid qilish</button>
        </div>
        <div className={classes.infoBanner}>
          <div className={classes.delivery}>
            <p>Tezkor yetkazish 1 kundan boshlab</p>
            <p>Uzum buyurtmalarni topshirish punkitida yoki kuryer orqali</p>
          </div>
          <div className={classes.payment}>
            <p>Qulay usulda xavfsiz to'lov</p>
            <p>Karta orqali, naqd yoki bo'lib to'lang</p>
            <div className={classes.iconContainer}>
              <UzumBankIcon />
              <UzumNasiyaIcon />
              <UzCardIcon />
              <HumoCartIcon />
              <VisaCartIcon />
              <MasterCartIcon />
              <CashIcon />
            </div>
          </div>
          <div className={classes.return}>
            <p>Qaytarish oson va tez</p>
            <p>
              Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini qaytaramiz
            </p>
          </div>
        </div>
        <p className={classes.purchased}>
          <BsCartCheck />
          Bu hafta 40 kishi sotib oldi
        </p>
      </div>
    </div>
  );
}
