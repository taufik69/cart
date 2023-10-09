import React, { useContext } from "react";
import styles from "../component/Cart.module.css";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { cartContext } from "./Cart";

const CartItem = () => {
  const context = useContext(cartContext);
  const {
    product,
    total_amount,
    total_item,
    HandleRemove,
    increment,
    HandleDecrement,
  } = context;

  return product.map((items) => (
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
          <AiOutlineMinus
            className={styles.remove_btn}
            onClick={() => HandleDecrement(items.price)}
          />
          <p className={styles.cart_total}>{total_item}</p>
          <AiOutlinePlus
            className={styles.remove_btn}
            onClick={() => increment(items.id)}
          />
        </div>
        <div>
          <p className={styles.remove_btn}>
            {total_amount ? total_amount : items.price}
          </p>
        </div>
        <div
          className={styles.remove_btn}
          onClick={() => HandleRemove(items.id)}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
    </div>
  ));
};

export default CartItem;
