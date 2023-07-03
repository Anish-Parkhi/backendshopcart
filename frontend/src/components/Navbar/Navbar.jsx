import styles from "./Navbar.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [post, setPosts] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [filterdata, setFilterData] = useState([]);

  //searchBar logic
  const handleChange = (e) => {
    if (search.charAt(0) === " ") {
      setSearch("");
    } else {
      setSearch(e.target.value);
    }
    const filteredResult = post.filter((item) =>
      item.product.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filteredResult);
  };

  const openOverlay = () => {
    setOverlay(!overlay);
    setSearch("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setPosts(res.data);
        // console.log(post);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  return (
    <>
      <nav className={styles.navBarContainer}>
        <ul className={styles.navbarList}>
          <li>
            <Link style={{ fontSize: "3rem" }} to="/">
              ShopCart
            </Link>
          </li>
          <li>
            <Link>Categories</Link>
            <ArrowDropDownIcon
              style={{ fontSize: "2rem", position: "relative", top: "0.5rem" }}
              onClick={() => setOpen(!open)}
              className={`icon ${open ? styles.iconOpen : ""}`}
            />
          </li>
          <li>
            <Link to="/deals">Deals</Link>
            <LocalOfferIcon
              style={{
                fontSize: "1.6rem",
                position: "relative",
                top: "0.5rem",
              }}
              className={styles.muiIcon}
            />
          </li>
          <li>
            <TextField
              onChange={handleChange}
              label="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={openOverlay}>
                      {overlay ? <CloseIcon /> : <SearchIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </li>
          <li>
            <Link to="/account">Account</Link>
            <AccountCircleIcon
              style={{ fontSize: "2rem", position: "relative", top: "0.5rem" }}
              className={styles.muiIcon}
            />
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            <ShoppingCartIcon
              style={{ fontSize: "2rem", position: "relative", top: "0.5rem" }}
              className={styles.muiIcon}
            />
          </li>
        </ul>
      </nav>
      {open && (
        <div className={styles.overlapContainer}>
          <ul className={styles.overlapContainerList}>
            <li>
              <a href="/earbuds">Earbuds</a>
            </li>
            <hr />
            <li>
              <a href="/earpods">Earpods</a>
            </li>
            <hr />
            <li>
              <a href="/wiredEarphones">Wired Earphones</a>
            </li>
          </ul>
        </div>
      )}

      {overlay && (
        <>
          <div className={styles.overlayContainer}>
            {filterdata?.map((item) => (
              <div className={styles.overlapContainerInnerDiv} key={item.id}>
                <div style={{ flexBasis: "50%", margin: "auto 0px" }}>
                  {item.product}
                </div>
                <img className={styles.overlapContainerImage} src={item.url} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
