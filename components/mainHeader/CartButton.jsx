'use client'

import Link from 'next/link'
import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';
import classes from "./MainHeader.module.css";

export default function CartButton() {
  const cart = useSelector((state) => state.cart.cart);

  return (
        <Link href={"/cart"}>
          <div className={classes.btn}>
            <SlBasket />
            Savat
            <p>{cart.length !== 0? cart.length : ''}</p>
          </div>
        </Link>
  )
}
