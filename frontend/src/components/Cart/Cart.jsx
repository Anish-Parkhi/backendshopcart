import styles from "./Cart.module.css";
import headphoneImg from "./headphone.jpg";
import PropTypes from "prop-types";
import Navbar from "../Navbar/Navbar";
// import axios from "axios";
function Cart(props) {
  return (
    <>
      <Navbar />
      <div className={styles.cartContainer}>
        <div className={styles.cartContainerHeader}>
          <div>Shopping Cart</div>
        </div>
        <div className={styles.cartContainerMainDiv}>
          <div style={{ width: "40%" }}>
            <img className={styles.cartContainerImage} src={headphoneImg} />
          </div>
          <div className={styles.cartContainerDescription}>
            <div style={{ fontSize: "2rem" }}>{props.name}</div>
            <hr />
            <div style={{ fontSize: "1.2rem" }}>Price: {props.price}</div>
            <div style={{ fontSize: "1.2rem", paddingTop: "0.4rem" }}>
              Quantity: {props.quantity}
            </div>
            <hr />
            <div style={{ fontSize: "1.5rem" }}>Subtotal: {props.price}</div>
            <div>
              <button className={styles.cartContainerButton}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Cart.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.string,
  price: PropTypes.string,
  productID: PropTypes.string,
};
export default Cart;
