"use client";

import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Image from "next/image";
import WishButton from "../cards/WishButton";
import AddToCart from "../cards/AddToCart";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import classes from "@/components/cards/Card.module.css";

export default function RelatedProduct({ relatedProducts }) {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const [position,setPosition] = useState(0)
  return (
    <Fragment>
      <h1 className={classes.relatedTitle}>O'xshash mahsulotlar</h1>
      <div
        className={`${classes.relatedProducts} flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide`}
        ref={ref}
        {...events}
        onScroll={(e)=>{setPosition(e.target.scrollLeft)}}
      >
        <button 
        className={classes.scrollLeft} 
        style={{transform: `translateX(${position}px)`}}
        onClick={()=>{ref.current.scrollLeft -= 300}}
        >
          <FaAngleLeft />
        </button>
        <button 
        className={classes.scrollRight} 
        style={{transform: `translateX(${position}px)`}} 
        onClick={()=>{ref.current.scrollLeft += 300}}>
          <FaAngleRight />
        </button>
        {relatedProducts?.map((product) => (
          <Link
            href={`/product/${product?.proType} ${product?.id}`}
            className={`${classes.card} ${classes.relatedCardMobile} flex-none w-52 h-32 bg-red-200`}
            key={product?.id}
          >
            <div className={classes.image}>
              <Image src={product?.image} alt={product?.name} fill sizes="auto" />
              <WishButton product={product} />
            </div>
            <div className={classes.shortInfo}>
              <p>{product?.name}</p>
              <p>⭐ {product?.rating}</p>
              <p>
                {(product?.discount / 12)
                  ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                  .split(".")[0]
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
                      .split(".")[0]
                      .replaceAll(",", " ")}
                  </s>
                </p>
                <p>
                  {product?.discount
                    ?.toLocaleString("en-US", { minimumFractionDigits: 2 })
                    .split(".")[0]
                    .replaceAll(",", " ")}{" "}
                  so&apos;m
                </p>
              </div>
              <AddToCart product={product} />
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}
