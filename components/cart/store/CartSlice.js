import { createSlice } from "@reduxjs/toolkit";
import { ACTION } from "next/dist/client/components/app-router-headers";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProduct: 0,
    totalDiscount: 0,
    totalPrice: 0,
    onlyBuy: false,
    notificationItem: false,
    wishes: [],
    searchResult: []
  },
  reducers: {
    addItem(state, action) {
      const newItem = {
        discount:
          typeof action.payload.discount === "number"
            ? action.payload.discount
            : Number(action.payload.discount.replaceAll(" ", "")),
        id: action.payload.id,
        cartItemId: action.payload.id + (action.payload.color || "") + (action.payload.size || ""),
        image: action.payload.image,
        name: action.payload.name,
        price:
          typeof action.payload.price === "number"
            ? action.payload.price
            : Number(action.payload.price.replaceAll(" ", "")),
        rating: action.payload.rating,
        specs: action.payload.specs,
        proType: action.payload.proType,
        quantity: action.payload.quantity || 1,
        totalPrice:
          typeof action.payload.price === "number"
            ? action.payload.price * (action.payload.quantity || 1)
            : Number(action.payload.price.replaceAll(" ", "")) *
              (action.payload.quantity || 1),
        totalDiscount:
          typeof action.payload.discount === "number"
            ? action.payload.discount * (action.payload.quantity || 1)
            : Number(action.payload.discount.replaceAll(" ", "")) *
              (action.payload.quantity || 1),
        color: action.payload.color || "",
        size: action.payload.size || ""
      };

      const existingItem = state.cart.find(
        (item) => item.cartItemId === newItem.cartItemId
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.totalPrice;
        existingItem.totalDiscount += newItem.totalDiscount;
        state.totalDiscount += newItem.totalDiscount;
        state.totalPrice += newItem.totalPrice;
      } else {
        const updatedCart = [newItem, ...state.cart];
        state.cart = updatedCart;
        state.totalProduct += 1;
        state.totalDiscount += newItem.totalDiscount;
        state.totalPrice += newItem.totalPrice;
      }
    },
    removeItem(state, action) {
      const newItem = action.payload.product || action.payload;
      const existingItem = state.cart.find(
        (item) => item.cartItemId === newItem.cartItemId
      );

      if (!action.payload.delete) {
        existingItem.quantity--;
        existingItem.totalDiscount -= newItem.discount;
        existingItem.totalPrice -= newItem.price;
        state.totalDiscount -= newItem.discount;
        state.totalPrice -= newItem.price;
      } else {
        state.cart = state.cart.filter(
          (item) => item.cartItemId !== newItem.cartItemId
        );
        state.totalDiscount -= existingItem.totalDiscount;
        state.totalPrice -= existingItem.totalPrice;
        state.totalProduct -= 1;
      }
    },
    manageWish(state, action) {
        const existingWish = state.wishes.find(wish => wish.id === action.payload.id);
        if(!existingWish){
          state.wishes.push(action.payload);
        }else{
          state.wishes = state.wishes.filter(wish => wish.id !== existingWish.id)
        }
    },
    setSearchResult(state,action){
      state.searchResult = action.payload
    },
    setOnlyBuyItem(state,action){

      if(action.payload){
        const newItem = {
          discount:
          typeof action.payload?.discount === "number"
          ? action.payload.discount
          : Number(action.payload.discount.replaceAll(" ", "")),
          id: action.payload.id,
          cartItemId: action.payload.id + (action.payload.color || "") + (action.payload.size || ""),
          image: action.payload.image,
          name: action.payload.name,
          price:
          typeof action.payload.price === "number"
          ? action.payload.price
          : Number(action.payload.price.replaceAll(" ", "")),
          rating: action.payload.rating,
          specs: action.payload.specs,
          proType: action.payload.proType,
          quantity: action.payload.quantity || 1,
          totalPrice:
          typeof action.payload.price === "number"
          ? action.payload.price * (action.payload.quantity || 1)
          : Number(action.payload.price.replaceAll(" ", "")) *
          (action.payload.quantity || 1),
          totalDiscount:
          typeof action.payload.discount === "number"
          ? action.payload.discount * (action.payload.quantity || 1)
          : Number(action.payload.discount.replaceAll(" ", "")) *
          (action.payload.quantity || 1),
          color: action.payload.color || "",
          size: action.payload.size || ""
        };
        
        state.onlyBuy = [newItem];
      }else{
        state.onlyBuy = action.payload;
      }
    },
    setNotificationItem(state,action){
      state.notificationItem = action.payload
    }
  },
});

export const cartAction = CartSlice.actions;

export default CartSlice;
