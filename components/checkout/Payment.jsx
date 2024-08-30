"use client";

import classes from "./Checkout.module.css";
import {
  HumoCartIcon,
  MasterCartIcon,
  Tick,
  UzCardIcon,
  UzumLabel,
  VisaCartIcon,
} from "../icons/icons";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Payment() {
  const [option, setOption] = useState("uzumBank");
  const totalDiscount = useSelector((state) => state.cart.totalDiscount);

  return (
    <div className={classes.payment}>
      <h3 style={{margin: '0 0 1rem 0'}}>To&apos;lov turi</h3>
      <div className={classes.radioWrapper} style={{ width: "80%" }}>
        <div className={classes.option} onClick={() => setOption("uzumBank")}>
          <div>
            <div className={classes.radio}>
              <span style={option === "uzumBank" ? {} : { display: "none" }}></span>
            </div>
            <UzumLabel />
          </div>
          <span>
            Sizni Uzum Bank ilovaiga yo&apos;naltiramiz, u yerda buyurtma uchun
            to&apos;lovni amalga oshirishingiz mumkin
          </span>
        </div>
        <div className={classes.option} onClick={() => setOption("online")}>
          <div>
            <div className={classes.radio}>
              <span
                style={option === "online" ? {} : { display: "none" }}
              ></span>
            </div>
            <p>Karta orqali onlayn</p>
          </div>
          <span>UZCARD, HUMO, Visa, MasterCard</span>
          <span className={classes.onlinePayment}>
            <MasterCartIcon />
            <UzCardIcon />
            <HumoCartIcon />
            <VisaCartIcon />
          </span>
        </div>
        <div className={classes.option}>
          <div>
            <div
              className={classes.radio}
              style={{ border: "1px solid rgb(179, 179, 179)" }}
            >
              <span
                style={option === "nasiya" ? {} : { display: "none" }}
              ></span>
            </div>
            <p>Uzum Nasiya</p>
          </div>
          <span className={classes.period}>
            <p>3 oy</p>
            <p>
              dan{" "}
              {(totalDiscount / 3)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split(".")[0]
                .replaceAll(",", " ")}{" "}
              so&apos;mdan{" "}
            </p>
          </span>
          <span className={classes.period}>
            <p>6 oy</p>
            <p>
              dan{" "}
              {(totalDiscount / 6)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split(".")[0]
                .replaceAll(",", " ")}{" "}
              so&apos;mdan{" "}
            </p>
          </span>
          <span className={classes.period}>
            <p>12 oy</p>
            <p>
              dan{" "}
              {(totalDiscount / 12)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split(".")[0]
                .replaceAll(",", " ")}{" "}
              so&apos;mdan{" "}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
