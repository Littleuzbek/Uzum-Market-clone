"use client";

import { useEffect} from "react";
import Card from "../cards/Card";
import { getItem } from "../cart/store/LocalStorage";
import WishesNone from "./WishesNone";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../cart/store/CartSlice";

export default function Wishes() {
  const wishes = useSelector(state => state.cart.wishes);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    const { localData } = getItem('wishes'); 
    
    if(wishes.length === 0){
      if(localData){
        dispatch(cartAction.setWish({wish: JSON.parse(localData), firstWishReload: true}))
      }
    }
  }, [])

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
