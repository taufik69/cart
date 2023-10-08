import React, { useContext } from "react";
import styles from "../component/Cart.module.css";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { cartContext } from "./Cart";
const CartItem = () => {
  const  context  = useContext(cartContext);

  return context.map((items) => (
    <div key={items.id}>
      <div className={styles.cart_item}>
        <div>
          <picture>
            <img src={items.image} alt={items.image} className={styles.img} />
          </picture>
        </div>

        <div className="">
          <h2>{items.description.substring(0, 30)}....</h2>
          <p>{items.category}</p>
        </div>

        <div className={styles.shopping_head}>
          <AiOutlineMinus className={styles.remove_btn} />
          <p className={styles.cart_total}>{items.price}</p>
          <AiOutlinePlus className={styles.remove_btn} />
        </div>

        <div>
          <p className={styles.remove_btn}>{items.price}</p>
        </div>

        <div className={styles.remove_btn}>
          <AiOutlineCloseCircle />
        </div>
      </div>
    </div>
  ));
};

export default CartItem;
