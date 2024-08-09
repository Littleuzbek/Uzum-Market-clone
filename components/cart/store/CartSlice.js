import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "./LocalStorage";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProduct: 0,
    totalDiscount: 0,
    totalPrice: 0,
    wishes: [],
    firstReload: false,
    firstWishReload: false
  },
  reducers: {
    addItem(state, action) {
      const newItem = {
        discount:
          typeof action.payload.discount === "number"
            ? action.payload.discount
            : Number(action.payload.discount.replaceAll(" ", "")),
        id: action.payload.id,
        cartItemId: action.payload.id + (action.payload.color || ""),
        image: action.payload.image,
        name: action.payload.name,
        price:
          typeof action.payload.price === "number"
            ? action.payload.price
            : Number(action.payload.price.replaceAll(" ", "")),
        rating: action.payload.rating,
        specs: action.payload.specs,
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

      if (!state.firstReload) {
        const { localData } = getItem("cart");
        const { localData: totalDiscount } = getItem("totalDiscount");
        const { localData: totalPrice } = getItem("totalPrice");
        const { localData: totalProduct } = getItem("totalProduct");

        const updatedCart = [newItem, ...(JSON.parse(localData) || [])];

        setItem("cart", updatedCart);
        setItem(
          "totalDiscount",
          JSON.parse(totalDiscount) || state.totalDiscount
        );
        setItem("totalPrice", JSON.parse(totalPrice) || state.totalPrice);
        setItem("totalProduct", JSON.parse(totalProduct) || state.totalProduct);

        state.firstReload = true;
      } else {
        setItem("cart", state.cart);
        setItem("totalDiscount", state.totalDiscount);
        setItem("totalPrice", state.totalPrice);
        setItem("totalProduct", state.totalProduct);
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

        setItem("cart", state.cart);
        setItem("totalDiscount", state.totalDiscount);
        setItem("totalPrice", state.totalPrice);
        setItem("totalProduct", state.totalProduct);
      } else {
        state.cart = state.cart.filter(
          (item) => item.cartItemId !== newItem.cartItemId
        );
        state.totalDiscount -= existingItem.totalDiscount;
        state.totalPrice -= existingItem.totalPrice;
        state.totalProduct -= 1;

        setItem("cart", state.cart);
        setItem("totalDiscount", state.totalDiscount);
        setItem("totalPrice", state.totalPrice);
        setItem("totalProduct", state.totalProduct);
      }
    },
    setLocalStorageItems(state, action) {
      if (action.payload.nonEmpty) {
        state.cart = [...action.payload.cart, ...state.cart];
      } else {
        state.cart = action.payload.cart;
      }
      state.localStorage = action.payload.firstReload;
    },
    setSum(state, action) {
      state.totalDiscount = action.payload.totalDiscount;
      state.totalPrice = action.payload.totalPrice;
      state.totalProduct = action.payload.totalProduct;
    },
    setWish(state, action) {
      if (action.payload.firstWishReload) {
        state.wishes = action.payload.wish
        state.firstWishReload = true;
      } else {
        const {localData} = getItem('wishes');
        const existingWish = state.wishes.find(wish => wish.id === action.payload.id);
        if(!existingWish){
          state.wishes.push(action.payload);
        }else{
          state.wishes = state.wishes.filter(wish => wish.id !== existingWish.id)
        }

        if(state.firstWishReload){
          setItem('wishes', state.wishes)
        }else{
          const localWishes = JSON.parse(localData);
          setItem('wishes', [...state.wishes, ...(localWishes || [])])
        }
      }
    },
  },
});

export const cartAction = CartSlice.actions;

export default CartSlice;
