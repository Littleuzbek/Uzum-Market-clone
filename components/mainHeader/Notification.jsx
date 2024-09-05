"use client";

import Image from "next/image";
import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Notification() {
  const [notific, setNotific] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const newItem = useSelector((state) => state.cart.notificationItem);
  const pathname = usePathname();
  const ref = useRef();

  useEffect(() => {
    if (cart.length !== 0) {
     
      if(ref.current){
        clearTimeout(ref.current)
      }

      setNotific(false);
      
      setTimeout(() => {
        setNotific(true);
      }, 50);
      
      ref.current = setTimeout(() => {
        setNotific(false);
      }, 1500);
      
    }
  }, [cart]);
  return (
    <>
      {(pathname != '/cart' && notific) && (
        <div className={classes.notificationContainer}>
          <div className={classes.notification}>
            <Image src={newItem?.image || ''} fill sizes="auto" alt="" />
          <div>
            <div>
              <p>Mahsulot savatga qo&apos;shildi.</p>
              <IoCloseOutline onClick={()=>setNotific(false)}/>
            </div>
            <div>
              <p>{newItem?.name}</p>
              <Link href={"/cart"}>Savatga o&apos;tish</Link>
            </div>
            </div>
          </div>
          <p className={classes.smallNotification}>
            Mahsulot savatga qo&apos;shildi
          </p>
        </div>
      )}
    </>
  );
}
