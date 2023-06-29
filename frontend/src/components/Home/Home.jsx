import styles from "./Home.module.css";
import PropTypes from "prop-types";
import img from "./girl.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import headphoneImg from "./headphone.jpg";
import { useState } from "react";
function Home(props) {
  const [favorite, setFavourite] = useState(false);
  // const [cart, setCart] = useState(null);
  return (
    <div>
      <div className={styles.posterContainerWrapper}>
        <div className={styles.posterContainer}>
          <p className={styles.posterContainerHeadline}>{props.headline}</p>
          <button className={styles.posterContainerButton}>Buy Now</button>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <img className={styles.posterContainerImage} src={img} />
        </div>
      </div>

      {/* card view */}

      <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          {favorite ? (
            <FavoriteIcon
              style={{ marginLeft: "auto", padding: "0.7rem" }}
              className={styles.cardContainerFavIcon}
              onClick={() => setFavourite(!favorite)}
            />
          ) : (
            <FavoriteBorderIcon
              style={{ marginLeft: "auto", padding: "0.7rem" }}
              className={styles.cardContainerFavIcon}
              onClick={() => setFavourite(!favorite)}
            />
          )}
          <img className={styles.cardContainerImg} src={headphoneImg} />
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterHeadingDiv}>
            <div>Wirelesss earbuds</div>
            <div style={{ marginLeft: "auto", fontWeight: "600" }}>$89.00</div>
          </div>
          <div className={styles.cardFooterDescription}>
            <div>Orgainc Cotton, fairtrade certified</div>
            <button className={styles.cardFooterButton}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Home.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Home;
