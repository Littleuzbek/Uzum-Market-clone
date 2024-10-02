"use client";

import classes from "./MainHeader.module.css";
import Link from "next/link";
import { DownloadUzum, Orders, SearchMini, UzumMini } from "../icons/icons";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { RiMap2Line } from "react-icons/ri";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { useSelector } from "react-redux";

export default function MiniHeader() {
  const totalProduct = useSelector((state) => state.cart.totalProduct);
  const [cabinet, setCabinet] = useState(false);
  const pathname = usePathname();

  const cabinetHandler = (e) => {
    const body = document.body;

    if (e) {
      setCabinet(true);
      body.style.overflow = "hidden";
    } else {
      body.removeAttribute("style");
      setCabinet(false);
    }
  };
  return (
    <>
    {pathname.includes('product') ||
      <section>
        <Link href={"/"} onClick={() => cabinetHandler(false)}>
          <UzumMini style={pathname === "/" && (cabinet? false :"#7f4dff")} />
          <p style={cabinet ? {} : { color: `${pathname === "/" ? "#7f4dff" : ""}` }}>
            Bosh sahifa
          </p>
        </Link>
        <Link href={"/search"} onClick={() => cabinetHandler(false)}>
          <SearchMini style={pathname === "/search" && (cabinet? false :"#7f4dff")} />
          <p style={cabinet ? {} : { color: `${pathname === "/search" ? "#7f4dff" : ""}` }}>
            Qidirish
          </p>
        </Link>
        <Link href={"/cart"} onClick={() => cabinetHandler(false)}>
          <SlBasket
            className={classes.btnMini}
            style={cabinet ? {} : { color: `${pathname === "/cart" ? "#7f4dff" : ""}` }}
            />
          <p style={cabinet ? {} : { color: `${pathname === "/cart" ? "#7f4dff" : ""}` }}>
            Savat
          </p>
          {totalProduct !== 0 && <span className={classes.cartQuantity}>{totalProduct}</span>}
        </Link>
        <Link href={"/wishes"} onClick={() => cabinetHandler(false)}>
          <CiHeart
            className={classes.btnMini}
            style={cabinet ? {} : { color: `${pathname === "/wishes" ? "#7f4dff" : ""}` }}
            />
          <p style={cabinet ? {} : { color: `${pathname === "/wishes" ? "#7f4dff" : ""}` }}>
            Saralanganlar
          </p>
        </Link>
        <a onClick={() => cabinetHandler(true)}>
          <CiUser
            className={classes.btnMini}
            style={{ color: `${cabinet ? "#7f4dff" : ""}` }}
            />
          <p style={{ color: `${cabinet ? "#7f4dff" : ""}` }}>
            Kabinet
          </p>
        </a>
      </section>
      }

      {cabinet && (
        <div className={classes.cabinet}>
        <div>
        <CiLogin /> Kirish/Ro&apos;yxatdan o&apos;tish
        </div>
        <div>
        <Orders /> Buyurtmalarim
        </div>
        <div>
        <CiHeart /> Saralanganlar
        </div>
        <div>
        <CiLocationOn />
        Shahar: Boshqa
        </div>
        <div>
            <RiMap2Line /> Topshirish punkti
          </div>
          <span></span>
          <div>
            <RxQuestionMarkCircled /> Savol-javoblar
          </div>
          <div>
            <MdOutlineEmail /> Biz bilan bog&apos;lanish
          </div>
          <div>
            <DownloadUzum /> Uzum ilovasini yuklash
          </div>
        </div>
        )}
    </>
  );
}
