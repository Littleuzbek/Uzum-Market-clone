import { BsTrash3Fill } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import { cartAction } from "./store/CartSlice";
import { useDispatch } from "react-redux";
import classes from "./Cart.module.css";
import Image from "next/image";

export default function AboutItem({ product }) {
  const dispatch = useDispatch();

  const amountHandler = (action, product) => {
    if (action === "delete") {
      dispatch(cartAction.removeItem({ product: product, delete: action }));
    }

    if (action === "-") {
      if (product.quantity !== 1) {
        dispatch(cartAction.removeItem(product));
      }
    }

    if (action === "+") {
      const newItem = {
        discount: product.discount,
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating,
        specs: product.specs,
        quantity: 1,
        color: product.color,
        size: product.size,
      };

      dispatch(cartAction.addItem(newItem));
    }
  };

  return (
    <>
      <Image
        src={product.image}
        alt=""
        className={classes.image}
        fill
        sizes="auto"
      />
      <div className={classes.aboutItem}>
        <Link
          href={`/product/${product?.proType} ${product?.id}`}
          className={classes.productName}
        >
          <p>{product.name}</p>
        </Link>
        <div
          className={classes.deleteBtn}
          onClick={() => amountHandler("delete", product)}
        >
          <BsTrash3Fill className={classes.trashIcon} /> Yo&apos;q qilish
        </div>
        <div>
          <span className={classes.ownerName}>
            Sotuvchi: <p> Shodiyor komp</p>
          </span>
          {product.color && (
            <span className={classes.pickedColor}>
              Rang: <p>{product.color}</p>
            </span>
          )}
          {product.size && (
            <span className={classes.pickedColor}>
              O&apos;lcham: <p>{product.size}</p>
            </span>
          )}
        </div>
        <div className={classes.amount}>
          <button
            style={
              product.quantity === 1
                ? {
                    color: "rgb(177, 177, 177)",
                    cursor: "default",
                  }
                : {}
            }
            onClick={() => amountHandler("-", product)}
          >
            <FaMinus>-</FaMinus>
          </button>
          <p>{product.quantity}</p>
          <button onClick={() => amountHandler("+", product)}>
            <FaPlus>+</FaPlus>
          </button>
        </div>
        <div className={classes.price}>
          <p>
            {product.totalDiscount
              ?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })
              .split(".")[0]
              .replaceAll(",", " ")}
          </p>
          <s>
            {product.totalPrice
              ?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })
              .split(".")[0]
              .replaceAll(",", " ")}
          </s>
        </div>
      </div>

      <div className={classes.aboutItemMobile}>
      <Link
          href={`/product/${product?.proType} ${product?.id}`}
          className={classes.productName}
        >
          <p>{product.name}</p>
        </Link>
        <div>
          <span className={classes.ownerName}>
            Sotuvchi: <p> Shodiyor komp</p>
          </span>
          {product.color && (
            <span className={classes.pickedColor}>
              Rang: <p>{product.color}</p>
            </span>
          )}
          {product.size && (
            <span className={classes.pickedColor}>
              O&apos;lcham: <p>{product.size}</p>
            </span>
          )}
        </div>
        <div className={classes.price}>
          <p>
            {product.totalDiscount
              ?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })
              .split(".")[0]
              .replaceAll(",", " ")} so&apos;m
          </p>
          <s>
            {product.totalPrice
              ?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })
              .split(".")[0]
              .replaceAll(",", " ")} so&apos;m
          </s>
          </div>
      </div>

      <div className={classes.actions}>
      <div className={classes.amount}>
          <button
            style={
              product.quantity === 1
                ? {
                    color: "rgb(177, 177, 177)",
                    cursor: "default",
                  }
                : {}
            }
            onClick={() => amountHandler("-", product)}
          >
            <FaMinus>-</FaMinus>
          </button>
          <p>{product.quantity}</p>
          <button onClick={() => amountHandler("+", product)}>
            <FaPlus>+</FaPlus>
          </button>
        </div>

        {product.quantity > 1 && <p>{product?.discount?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })
              .split(".")[0]
              .replaceAll(",", " ")} so&apos;m /birrlik
        </p>}

        <div
          className={classes.deleteBtn}
          onClick={() => amountHandler("delete", product)}
        >
          <BsTrash3Fill className={classes.trashIcon} /> Yo&apos;q qilish
        </div>
      </div>
    </>
  );
}
