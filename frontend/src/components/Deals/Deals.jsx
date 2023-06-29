import Navbar from "../Navbar/Navbar";
import styles from "./Deals.module.css";
function Deals() {
  return (
    <>
      <Navbar />
      <div className={styles.dealsContainer}>Deals Component</div>
    </>
  );
}

export default Deals;
