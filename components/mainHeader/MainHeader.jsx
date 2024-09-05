import classes from "./MainHeader.module.css";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import CartButton from "./CartButton";
import WishButton from "./WishButton";
import Login from "./Login";
import MiniHeader from "./MiniHeader";
import Notification from "./Notification";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/" className={classes.logo}>
          <Logo />
        </Link>

        <Login />
        <Search />
        <WishButton />
        <CartButton />
      </div>
      <div>
        <Link href={"/category/laptops"} className={classes.category}>
          <span>Kompyuter</span>
        </Link>
        <Link href={"/category/smartPhones"} className={classes.category}>
          <span>Telefon</span>
        </Link>
        <Link href={"/category/accessories"} className={classes.category}>
          <span>Aksesuar</span>
        </Link>
        <Link href={"/category/dresses"} className={classes.category}>
          <span>Kiyim</span>
        </Link>
        <Link href={"/category/shoes"} className={classes.category}>
          <span>Oyoq kiyim</span>
        </Link>
        <Link href={"/category/perfumes"} className={classes.category}>
          <span>Atir</span>
        </Link>
      </div>
      <MiniHeader />
      <Notification />
    </header>
  );
}
