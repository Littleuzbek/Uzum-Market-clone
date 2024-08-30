"use client";

import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import {
  CashIcon,
  HumoCartIcon,
  MasterCartIcon,
  UnWish,
  UzCardIcon,
  UzumBankIcon,
  UzumNasiyaIcon,
  VisaCartIcon,
  Wish,
} from "../icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../cart/store/CartSlice";
import ProductInfo from "./ProductInfo";
import AmountHandler from "./shoppingDetails/AmountHandler";
import classes from "./ShoppingDetails.module.css";
import Options from "./shoppingDetails/Options";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function ShoppingDetails({ productDetails }) {
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState();
  const [activeSize, setActiveSize] = useState(null);
  const cart = useSelector((state) => state.cart.cart);
  const wishes = useSelector(state => state.cart.wishes);
  const inWish = wishes?.find(item => item.id === productDetails.id);
  const inCart = (cart?.filter(product => product.id === productDetails.id)?.length === 0);
  const quantityForMobile = cart?.filter(product => product.id === productDetails.id)[0]?.quantity || 1;
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
      proType: productDetails.proType,
      quantity: quantity,
      color: activeColor || '',
      size: activeSize || '',
    };
    dispatch(cartAction.addItem(addingItem));
  };
  return (
    <div className={classes.shopDetails}>
      <div className={classes.shopping}>
        <div>
          <p className={classes.productRating}>⭐{productDetails?.rating}</p>
          <div onClick={()=>dispatch(cartAction.manageWish(productDetails))}>
            {
              inWish ? <UnWish /> : <Wish />
            }
            Istaklarga
          </div>
        </div>
        <p className={classes.productName}>{productDetails?.name}</p>
        <div className={classes.priceContainerMobile}>
          <p>Narx:</p>
          <div className={classes.price}>
            <p>
              {(productDetails?.discount * quantity)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split('.')[0]
                .replaceAll(",", " ")} so&apos;m
            </p>
            <s>
              {(productDetails?.price * quantity)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split('.')[0]
                .replaceAll(",", " ")}
            </s>
          </div>
        </div>
        <p className={classes.seller}>
          Sotuvchi:
          <a>Uzum Market</a>
        </p>
        <Options 
          productDetails={productDetails} 
          activeColor={activeColor}
          onSetActiveColor={setActiveColor}
          activeSize={activeSize}
          onSetActiveSize={setActiveSize}
        />
        <AmountHandler onAmountHandler={amountHandler} quantity={quantity} />
        <div className={classes.priceContainer}>
          <p>Narx:</p>
          <div className={classes.price}>
            <p>
              {(productDetails?.discount * quantity)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split('.')[0]
                .replaceAll(",", " ")}
            </p>
            <s>
              {(productDetails?.price * quantity)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split('.')[0]
                .replaceAll(",", " ")}
            </s>
          </div>
        </div>
        <p className={classes.credit}>
          <span>
            Oyiga{" "}
            {(productDetails?.discount / 12)
              ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
              .split('.')[0]
              .replaceAll(",", " ")}{" "}
            so&apos;mdan
          </span>
          muddatli to&apos;lov
        </p>
        <div className={classes.btnContainer}>
          <button
            onClick={() => {
              addToCart();
            }}
          >
            Savatga qo&apos;shish
          </button>
          <button>Xarid qilish</button>
        </div>
        <div className={classes.infoBanner}>
          <div className={classes.delivery}>
            <p>Tezkor yetkazish 1 kundan boshlab</p>
            <p>Uzum buyurtmalarni topshirish punkitida yoki kuryer orqali</p>
          </div>
          <div className={classes.payment}>
            <p>Qulay usulda xavfsiz to&apos;lov</p>
            <p>Karta orqali, naqd yoki bo&apos;lib to&apos;lang</p>
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
        <div className={classes.shortInfo}>
          <p>Mahsulot haqida qisqacha</p>
          <ProductInfo productDetails={productDetails} />
        </div>
      </div>

      <div className={classes.addToCart}>
          <div>
            <p>{(productDetails?.discount * quantityForMobile)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split('.')[0]
                .replaceAll(",", " ")} so&apos;m</p>
            <s>{(productDetails?.price * quantityForMobile)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split('.')[0]
                .replaceAll(",", " ")}</s>
          </div>
          {inCart || <button className={classes.addMore} onClick={()=>addToCart()}>+1</button>}
          {inCart && <button onClick={()=>addToCart()}>Savatga</button>}
          {inCart || <Link href={'/cart'} className={classes.toCartPage}>
              <FaShoppingCart />
              O&apos;tish
          </Link>}
      </div>
    </div>
  );
}
