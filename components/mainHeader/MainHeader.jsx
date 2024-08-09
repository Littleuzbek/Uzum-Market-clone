// import Image from 'next/image'
import Link from "next/link";
import Logo from "./Logo";
import { LuMenu } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { SlBasket } from "react-icons/sl"; // before user added smthing to cart
// import { SlBasketLoaded } from "react-icons/sl"; // after user added smthing to cart
import classes from "./MainHeader.module.css";
import Search from "./Search";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/" className={classes.logo}>
          <Logo />
        </Link>
        <div className={classes.btn}>
          <LuMenu />
          Katalog
        </div>
        <Search />
        <div className={classes.btn}>
          <CiUser />
          Kirish
        </div>
        <Link href={'/wishes'}>
          <div className={classes.btn}>
            <CiHeart />
            Saralanganlar
          </div>
        </Link>
        <Link href={"/cart"}>
          <div className={classes.btn}>
            <SlBasket />
            Savat
          </div>
        </Link>
      </div>
      <div>
        <span>Laptops</span>
        <span>Smartphones</span>
        <span>Electric accessories</span>
        <span>Dresses</span>
        <span>Shoes</span>
        <span>Parfumes</span>
      </div>
    </header>
  );
}
