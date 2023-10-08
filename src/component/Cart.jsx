import React, { useEffect, createContext, useReducer, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import styles from "../component/Cart.module.css";
import CartItem from "./CartItem.jsx";
import reducer from "./reducer.jsx";
import ProductData from "./ProductData";

export const cartContext = createContext();

const initialState = {
  total_amount: 0,
  total_item: 0,
};

const Cart = () => {
  var product = ProductData();
  initialState["product"] = product;
  const [state, dispatch] = useReducer(reducer, initialState);

  // Cart remove button funtionality start . get a item id
  const HandleRemove = (itemId) => {
    dispatch({
      type: "REMOVE",
      payload: itemId,
    });
  };

  return (
    <>
      <div>
        <div className={styles.cartHead}>
          <div className={styles.shopping_head}>
            <AiOutlineArrowLeft className={styles.shopping} />
            <p className={styles.shopping}>continue to shopping</p>
          </div>
          <div className={styles.cart}>
            <BsCart3 />
          </div>
        </div>

        <div className={styles.cart_body}>
          <div className={styles.shopping_title}>
            <h1>Shopping Cart</h1>
            <p>You have 4 items in shopping cart</p>
          </div>

          <div className={styles.main_cart_item}>
            <cartContext.Provider value={{ ...state, HandleRemove }}>
              <CartItem />
            </cartContext.Provider>
          </div>
        </div>

        <div className={styles.total_amount}>
          <p className={styles.subtotalAmount}>8000Tk</p>
          <button className={styles.button}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
