import React, { useEffect, useState } from "react";
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
  const [product, setproduct] = useState([]);
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
            {product.map((items) => (
              <div className={styles.cart_item}>
                <div>
                  <picture>
                    <img
                      src={items.image}
                      alt={items.image}
                      className={styles.img}
                    />
                  </picture>
                </div>

                <div className="">
                  <h2>{items.description.slice(0, 18)}</h2>
                  <p>{items.category}</p>
                </div>

                <div className={styles.shopping_head}>
                  <AiOutlineMinus className={styles.remove_btn} />
                  <p className={styles.cart_total}>{items.price.toString().slice(0,1)}</p>
                  <AiOutlinePlus className={styles.remove_btn} />
                </div>

                <div className="img">
                  <p className={styles.remove_btn}>{items.price}</p>
                </div>

                <div className={styles.remove_btn}>
                  <AiOutlineCloseCircle />
                </div>
              </div>
            ))}
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
