import classes from "./ProductInfo.module.css";

export default function ProductInfo({ productDetails }) {
  return (
    <div className={classes.details} key={productDetails?.id}> 
      <p className={classes.productName}>{productDetails?.name}</p>
      <p className={classes.productRating}>⭐{productDetails?.rating}</p>
      <div className={classes.specs}>
        <div>
          <h3>Processor:</h3> {productDetails?.specs?.processor}
        </div>
        <div>
          <h3>Ram:</h3> {productDetails?.specs?.ram}
        </div>
        <div>
          <h3>Screen:</h3> {productDetails?.specs?.screen}
        </div>
        <div>
          <h3>Processor speed:</h3> {productDetails?.specs?.processorSpeed || ' unknown'}
        </div>
        <div>
          <h3>Memory:</h3> {productDetails?.specs?.memory}
        </div>
        <div>
          <h3>Refresh rate:</h3> {productDetails?.specs?.refreshRate}
        </div>
        <div>
          <h3>Graphics:</h3> {productDetails?.specs?.graphics}
        </div>
        <div>
          <h3>Weight:</h3> {productDetails?.specs?.weight}
        </div>
        <div>
          <h3>Touch screen:</h3> {productDetails?.specs?.touchScreen}
        </div>
      </div>
    </div>
  );
}
