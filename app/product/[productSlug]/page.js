import classes from "./page.module.css";
import { Suspense } from "react";
import Product from "@/components/product/Product";
import Loader from "@/components/loader/Loader";
import { getData } from "@/app/Data";

export async function generateMetadata({ params, searchParams }, parent) {
  const productId = params.productSlug;

  const products = await getData();
  const filteredId = productId.split("%20");
  let type;

  if (filteredId[0] === "laptops") type = products?.laptops;
  if (filteredId[0] === "smartPhones") type = products?.smartPhones;
  if (filteredId[0] === "accessories") type = products?.accessories;
  if (filteredId[0] === "shoes") type = products?.shoes;
  if (filteredId[0] === "dresses") type = products?.dresses;
  if (filteredId[0] === "perfumes") type = products?.perfumes;
  if (filteredId[0] === "popular") type = products?.popular;

  const foundProduct = type?.find((product) => product.id === filteredId?.at(1));
  
  return {
    title: `${foundProduct?.name}ni arzon narxda sotib oling - Uzum.uz` || "Mahsulot haqida ma'lumotlar.",
    description: "Mahsulot haqida ma'lumotlar."
  };
}

export default async function ProductSlug({ params }) {
  return (
    <div className={classes.productPage}>
      <div className={classes.productDetails}>
        <Suspense fallback={<Loader />}>
          <Product productId={params.productSlug} />
        </Suspense>
      </div>
    </div>
  );
}
