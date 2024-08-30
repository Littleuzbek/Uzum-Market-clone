"use client";

import Card from "@/components/cards/Card";
import { Fragment } from "react";
import { useSelector } from "react-redux";

export default function SearchPage() {
  const results = useSelector((state) => state.cart.searchResult);
  return (
    <Fragment>
      {results.length !== 0 ? (
        <Card title={"Qidiruv natijasi"} products={results} />
      ) : (
        <Card
          title={"Qidirmoqchi bo'lgan narsangiz nomini to'g'ri kiriting."}
          products={results}
        />
      )}
    </Fragment>
  );
}
