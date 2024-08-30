"use client";

import Card from "../cards/Card";
import WishesNone from "./WishesNone";
import { useSelector } from "react-redux";

export default function Wishes() {
  const wishes = useSelector(state => state.cart.wishes);
  
  return (
    <div>
      {wishes.length === 0 ? (
        <WishesNone />
      ) : (
        <Card title={"Istaklarim"} products={wishes} />
      )}
    </div>
  );
}
