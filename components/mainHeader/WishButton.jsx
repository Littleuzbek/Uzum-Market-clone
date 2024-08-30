"use client";

import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import classes from "./MainHeader.module.css";
import { useSelector } from "react-redux";

export default function WishButton() {
  const wishes = useSelector((state) => state.cart.wishes);
  return (
    <Link href={"/wishes"}>
      <div className={classes.btn}>
        <CiHeart />
        Saralanganlar
        <p>{wishes.length !== 0 ? wishes.length : ""}</p>
      </div>
    </Link>
  );
}
