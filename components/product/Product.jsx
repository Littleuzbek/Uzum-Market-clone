import { Fragment } from "react";
import { getData } from "@/app/Data";
import ProductImage from "./ProductImage";
import Comments from "./Comments";
import ShoppingDetails from "./ShoppingDetails";
import RelatedProduct from "./RelatedProduct";

export default async function Product({ productId }) {
  const products = await getData();
  const filteredId = productId.split("%20");
  let type;
  
  if (filteredId[0] === "laptops") {
    type = products?.laptops;
  }
  if (filteredId[0] === "smartPhones") {
    type = products?.smartPhones;
  }
  if (filteredId[0] === "accessories") {
    type = products?.accessories;
  }
  if (filteredId[0] === "shoes") {
    type = products?.shoes;
  }
  if (filteredId[0] === "dresses") {
    type = products?.dresses;
  }
  if (filteredId[0] === "perfumes") {
    type = products?.perfumes;
  }
  if (filteredId[0] === "popular") {
    type = products?.popular;
  }
  const foundProduct = type?.find((product) => product.id === filteredId?.at(1));
  const relatedProducts = type?.filter(
    (product) => product.id !== filteredId?.at(1)
  );

  
  return (
    <Fragment>
      <div>
        <ProductImage productImage={foundProduct?.image} />
        <ShoppingDetails productDetails={foundProduct} />
      </div>
      <div>
        <Comments />
      </div>
      <RelatedProduct relatedProducts={relatedProducts} />
    </Fragment>
  );
}
