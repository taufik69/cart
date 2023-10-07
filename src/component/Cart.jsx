import React, { useEffect, useState, createContext ,useReducer} from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import styles from "../component/Cart.module.css";
import CartItem from "./CartItem";

export const cartContext = createContext();


const Cart = () => {
  const [product, setproduct] = useState([]);
  const initaialState = {
    item:product,
    total_amount:0,
    total_item : 0
  }
  const [state, dispatch] = useReducer(reducer , initaialState)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((Allproduct) => setproduct(Allproduct));
  }, []);
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
            
              <cartContext.Provider value={product}>
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
