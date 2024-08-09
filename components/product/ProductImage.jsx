"use client";

import Image from "next/image";
import classes from "./ProductImage.module.css";
import { useState } from "react";

export default function ProductImage({ productImage }) {
  const [image, setImage] = useState("scaleX(1)");

  return (
    <div className={classes.imageDetails}>
      <div>
        <Image
          src={productImage}
          alt=""
          onClick={() => setImage("scaleX(1)")}
          className={image === "scaleX(1)" ? classes.active : ''}
        />
        <Image
          src={productImage}
          alt=""
          onClick={() => setImage("scaleX(-1)")}
          className={image === "scaleX(-1)" ? classes.active : ''}
        />
      </div>
      <div>
        <Image src={productImage} style={{ transform: image }} alt="" />
      </div>
    </div>
  );
}
