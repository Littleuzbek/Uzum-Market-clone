import { getData } from "@/app/Data";
import Card from "@/components/cards/Card";
import Loader from "@/components/loader/Loader";
import { Fragment, Suspense } from "react";

export default async function CategorySlug({ params }) {
  const products = await getData();
  let title;
  let category;
  
  if (params.categorySlug === "laptops") {
    category = products.laptops;
    title = "Kompyuterlar";
  }
  if (params.categorySlug === "dresses") {
    category = products.dresses;
    title = "Kiyimlar";
  }
  if (params.categorySlug === "accessories") {
    category = products.accessories;
    title = "Aksesuarlar";
  }
  if (params.categorySlug === "perfumes") {
    category = products.perfumes;
    title = "Atirlar";
  }
  if (params.categorySlug === "shoes") {
    category = products.shoes;
    title = "Oyoq kiyimlar";
  }
  if (params.categorySlug === "smartPhones") {
    category = products.smartPhones;
    title = "Smart telefonlar";
  }
  
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Card title={title} products={category} />
      </Suspense>
    </Fragment>
  );
}
