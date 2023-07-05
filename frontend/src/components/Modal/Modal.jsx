import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
function Modal(props) {
  const navigate = useNavigate();

  if (!props.show) {
    return null;
  }
  return (
    <div onClick={props.onClose} className={styles.modalContainer}>
      <div className={styles.modalBodyMain}>
        <div className={styles.modalCloseButton}>
          <CloseIcon onClick={props.onClose} style={{ fontSize: "30px" }} />
        </div>
        <div className={styles.modalHeader}>
          Product Has been successfully added to the cart
        </div>
        <div className={styles.modalBody}>
          <CheckCircleIcon style={{ fontSize: "100px", color: "green" }} />
        </div>
        <div className={styles.modalCheckout}>
          <button
            className={styles.modalCheckoutButton}
            onClick={() => navigate("/cart")}
          >
            Proceed to Checkout
          </button>
          <button
            className={styles.modalCheckoutButton}
            onClick={() => navigate("/")}
          >
            Shop More
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
