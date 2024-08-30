import classes from "./ProductInfo.module.css";

export default function ProductInfo({ productDetails }) {
  return (
    <ul className={classes.details} key={productDetails?.id}>
      {productDetails?.specs.map((specification, index) => (
        <li key={"specification" + index}>{specification}</li>
      ))}
    </ul>
  );
}
