import Navbar from "../Navbar/Navbar";
import axios from "axios";
import styles from "./Checkout.module.css";
import { useEffect, useState } from "react";
import img from "./headphonecpy.jpg";
import cart from "./emptyCart.png";
function Checkout() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/cart")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let subTotal = 0;
  return (
    <>
      <Navbar />
      <div className={styles.checkoutContainer}>
        {data.length === 0 ? (
          <div className={styles.checkoutContainerEmptyCart}>
            <img style={{ width: "30%" }} src={cart} />
            <div style={{ fontSize: "1.5rem", marginTop: "1.5rem" }}>
              Cart is Empty
            </div>
          </div>
        ) : (
          <>
            {data.map((item) => {
              const total = item.quantity * item.price;
              subTotal = subTotal + total;
              return (
                <div key={item._id} className={styles.checkoutContainerItem}>
                  <div className={styles.checkoutContainerImage}>
                    <img
                      style={{ width: "50%", borderRadius: "1rem" }}
                      src={img}
                    />
                  </div>
                  <div className={styles.checkoutContainerInnerDiv}>
                    <div className={styles.checkoutContainerProductName}>
                      {item.name}
                    </div>
                    <div className={styles.checkoutContainerProductQuantity}>
                      Quantity: {item.quantity}
                    </div>
                    <div className={styles.checkoutContainerProductPrice}>
                      Price: ₹{item.price}
                    </div>
                    <div className={styles.checkoutContainerProductTotal}>
                      Total: ₹{total}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.checkoutContainerSubtotal}>
              Subtotal: ₹{subTotal}
            </div>
            <div className={styles.checkoutContainerCheckout}>
              <button className={styles.checkoutContainerButton}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Checkout;
