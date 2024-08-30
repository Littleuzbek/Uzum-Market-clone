import classes from "./page.module.css";
import { Suspense } from "react";
import Product from "@/components/product/Product";
import Loader from "@/components/loader/Loader";

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
