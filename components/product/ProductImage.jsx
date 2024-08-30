"use client";

import Image from "next/image";
import classes from "./ProductImage.module.css";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

export default function ProductImage({ productImage }) {
  const [image, setImage] = useState("scaleX(1)");

  return (
    <>
    <div className={classes.imageDetails}>
      <div>
        <Image
          src={productImage}
          alt=""
          onClick={() => setImage("scaleX(1)")}
          className={image === "scaleX(1)" ? classes.active : ''}
          fill
          sizes="auto"
          priority
          />
        <Image
          src={productImage}
          alt=""
          onClick={() => setImage("scaleX(-1)")}
          className={image === "scaleX(-1)" ? classes.active : ''}
          fill
          sizes="auto"
          priority
          />
      </div>
      <div>
        <Image src={productImage} style={{ transform: image}} alt="" fill sizes="auto" priority/>
      </div>
    </div>

    <div className={classes.imageDetailsMobile}>
        <Image 
          src={productImage}
          alt=""
          style={{ transform: image}}
          fill
          sizes="auto"
          priority/>
          <button 
          className={classes.arrowLeft} 
          onClick={() => {
            return image === "scaleX(1)" ? setImage('scaleX(-1)') : setImage('scaleX(1)')
          }}
          >
            <FaAngleLeft />
          </button>
          <button 
          className={classes.arrowRight}
          onClick={() => {
            return image === "scaleX(1)" ? setImage('scaleX(-1)') : setImage('scaleX(1)')
          }}
          >
          <FaAngleRight />
          </button>
    </div>
    </>
  );
}
