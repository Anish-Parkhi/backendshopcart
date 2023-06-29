import styles from "./Product.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import headphoneImg from "./headphonecpy.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Navbar from "../Navbar/Navbar";

function Product(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <div className={styles.productContainer}>
        <div className={styles.productContainerImgDiv}>
          <img className={styles.productContainerImg} src={headphoneImg} />
        </div>
        <div className={styles.productContainerContent}>
          <div className={styles.productContainerHeading}>{props.name}</div>
          <div className={styles.productContainerDescription}>
            {props.description}
          </div>
          <hr />
          <div className={styles.productContainerPrice}>{props.price}</div>
          <div style={{ fontSize: "0.8rem" }}>
            6 months EMI options avalible on SBI Credit Cards
          </div>
          <hr />
          <div className={styles.productContainerCounter}>
            <div onClick={() => setCount((prev) => prev - 1)}>
              <RemoveIcon />
            </div>
            <div style={{ fontSize: "1.3rem" }}>{count}</div>
            <div onClick={() => setCount((prev) => prev + 1)}>
              <AddIcon />
            </div>
          </div>
          <div className={styles.productContainerButtons}>
            <button>Buy Now</button>
            <button style={{ marginLeft: "1rem" }}>Add to Cart</button>
            <div className={styles.productContainerBagIcon}>
              <ShoppingBagIcon style={{ fontSize: "3rem" }} />
              <div style={{ marginTop: "0.3rem", marginLeft: "0.2rem" }}>
                <div>Return Policy</div>
                <div>reuturn the item with 10 days of delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Product.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};
export default Product;
