"use client";

import Image from "next/image";
import classes from "./Checkout.module.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const cartt = [
    {
      discount: 60000,
      price: 320000,
      rating: "5 (200 sharhlar)",
      name: "Fast Charge Type-C kabelli 120 Vt, Zaryadchik",
      id: 0,
      image:
        "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/e1cb1072-1fa9-48f5-a9bf-11a284455c2d?alt=media&token=ef5a6671-36ef-4983-bc5f-89261658522a",
      options: { color: "Qora" },
      proType: "accessories",
      specs: [
        "Haddan tashqari issiqlik va qisqa tutashuvdan himoya qilish",
        "Moslik: Samsung, Xiaomi, Redmi, Honor, Infinix, Android",
        "Zaryadlash moslamasi 120 vatt; USB turi-c zaryadlovchi kabeli",
        "Tez zaryadlash; Haddan tashqari yuk va qisqa tutashuvdan himoya qilish; USB ulagichi",
      ],
    },
    {
      discount: 60000,
      price: 320000,
      rating: "5 (200 sharhlar)",
      name: "Fast Charge Type-C kabelli 120 Vt, Zaryadchik",
      id: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/lama-chat-40ea7.appspot.com/o/e1cb1072-1fa9-48f5-a9bf-11a284455c2d?alt=media&token=ef5a6671-36ef-4983-bc5f-89261658522a",
      options: { color: "Qora" },
      proType: "accessories",
      specs: [
        "Haddan tashqari issiqlik va qisqa tutashuvdan himoya qilish",
        "Moslik: Samsung, Xiaomi, Redmi, Honor, Infinix, Android",
        "Zaryadlash moslamasi 120 vatt; USB turi-c zaryadlovchi kabeli",
        "Tez zaryadlash; Haddan tashqari yuk va qisqa tutashuvdan himoya qilish; USB ulagichi",
      ],
    },
  ];
  return (
    <>
      <div className={classes.deliveringItems}>
        {cart?.map((product) => (
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
        {cart?.map((product) => (
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
