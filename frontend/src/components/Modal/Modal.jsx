import styles from "./Modal.module.css";
import PropTypes from "prop-types";
function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div onClick={props.onClose} className={styles.modalContainer}>
      <div className={styles.modalBodyMain}>
        <div className={styles.modalHeader}>Modal Header</div>
        <div className={styles.modalBody}>Modal Body</div>
        <div className={styles.modalFooter}>
          <button onClick={props.onClose}>Close</button>
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
