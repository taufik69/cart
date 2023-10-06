import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import styles from "../component/Cart.module.css";
import demo from "../assets/demo.jpg";
const Cart = () => {
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
            <div className={styles.cart_item}>
              <div>
                <picture>
                  <img src={demo} alt={demo} className={styles.img} />
                </picture>
              </div>

              <div className="">
                <h2>Samsung S21 ultra</h2>
                <p>Black Color</p>
              </div>

              <div className={styles.shopping_head}>
                <AiOutlineMinus className={styles.remove_btn} />
                <p className={styles.cart_total}>4</p>
                <AiOutlinePlus className={styles.remove_btn} />
              </div>

              <div className="img">
                <p className={styles.remove_btn}>50000Tk</p>
              </div>

              <div className={styles.remove_btn}>
                <AiOutlineCloseCircle />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
