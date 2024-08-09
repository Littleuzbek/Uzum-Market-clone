import classes from "./page.module.css";
import { Suspense } from "react";
import Product from "@/components/product/Product";

export default async function ProductSlug({ params }) {
  return (
    <div className={classes.productPage}>
      <div className={classes.productDetails}>
        <Suspense fallback="Loading...">
          <Product productId={params.productSlug} />
        </Suspense>
      </div>
    </div>
  );
}
