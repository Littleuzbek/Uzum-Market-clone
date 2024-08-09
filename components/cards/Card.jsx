import Image from "next/image";
import classes from "./Card.module.css";
import Link from "next/link";
import WishButton from "./WishButton";
import AddToCart from "./AddToCart";

export default function Card({products,title}) {
  return (
    <div className={classes.cardContainer}>
      <h1>{title}</h1>
      <div>
        {products.map((laptop) => (
          <Link href={`/product/${laptop?.id} ${laptop?.name}`} className={classes.card} key={laptop?.id}>
            <div className={classes.image}>
              <Image src={laptop?.image} alt={laptop?.name} />
              <WishButton product={laptop}/>
            </div>
            <p>{laptop?.name}</p>
            <p>⭐ {laptop?.rating}</p>
            <p>
              {Math.floor(Number(laptop?.discount?.replaceAll(" ", "")) / 12)
                .toLocaleString("en-US", { minimumFractionDigits: 2 })
                .replaceAll(".00", "")
                .replaceAll(",", " ")}{" "}
              so&apos;m/oyiga
            </p>
            <div>
              <div className={classes.price}>
                <p>
                  <s>{laptop?.price}</s>
                </p>
                <p>{laptop?.discount} so&apos;m</p>
              </div>
                <AddToCart product={laptop} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
