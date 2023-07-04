import styles from "./Home.module.css";
import PropTypes from "prop-types";
import img from "./girl.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Home(props) {
  const [favorite, setFavourite] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState("");
  function handleClick(id) {
    setId(id);
    navigate("/product", { state: { id } });
  }
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //logic to implement smooth scroll
  const scrollRef = useRef(null);

  const enableScroll = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={styles.posterContainerWrapper}>
        <div className={styles.posterContainer}>
          <p className={styles.posterContainerHeadline}>{props.headline}</p>
          <button
            onClick={enableScroll}
            id="scrollButton"
            className={styles.posterContainerButton}
          >
            Buy Now
          </button>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <img className={styles.posterContainerImage} src={img} />
        </div>
      </div>

      {/* card view */}
      <div ref={scrollRef} id="target" className={styles.baap}>
        {posts?.map((item, index) => {
          return (
            <div key={index} className={styles.cardWrapper}>
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
                <div style={{ textAlign: "center" }}>
                  <img
                    // onClick={() => handleClick(item._id)}
                    className={styles.cardContainerImg}
                    src={item.url}
                  />
                </div>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.cardFooterHeadingDiv}>
                  <div>{item.product}</div>
                  <div style={{ marginLeft: "auto", fontWeight: "600" }}>
                    ${item.price}
                  </div>
                </div>
                <div className={styles.cardFooterDescription}>
                  <div>{item.description}</div>
                  <button
                    onClick={() => handleClick(item._id)}
                    className={styles.cardFooterButton}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
Home.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Home;
