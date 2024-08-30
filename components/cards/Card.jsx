import Image from "next/image";
import classes from "./Card.module.css";
import Link from "next/link";
import WishButton from "./WishButton";
import AddToCart from "./AddToCart";

export default function Card({ products, title }) {
  return (
    <div className={classes.cardContainer}>
      <h1>{title}</h1>
      <div>
        {products?.map((product) => (
          <Link
            href={`/product/${product?.proType} ${product?.id}`}
            className={classes.card}
            key={product?.id}
          >
            <div className={classes.image}>
              <Image src={product?.image} alt={product?.name} fill sizes="auto" priority/>
              <WishButton product={product} />
            </div>
            <div className={classes.shortInfo}>
              <p>{product?.name}</p>
              <p>⭐ {product?.rating}</p>
              <p>
              {(product?.discount / 12)
                ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                .split('.')[0]
                .replaceAll(",", " ")}{" "}
              so&apos;m/oyiga
              </p>
            </div>
            <div>
              <div className={classes.price}>
                <p>
                  <s>
                    {product?.price
                      ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                      .split('.')[0]
                      .replaceAll(",", " ")}
                  </s>
                </p>
                <p>
                  {product?.discount
                    ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                    .split('.')[0]
                    .replaceAll(",", " ")}{" "}
                  so&apos;m
                </p>
              </div>
              <AddToCart product={product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
