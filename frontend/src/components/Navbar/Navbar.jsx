import styles from "./Navbar.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className={styles.navBarContainer}>
        <ul className={styles.navbarList}>
          <li>
            <a style={{ fontSize: "3rem" }} href="/">
              ShopCart
            </a>
          </li>
          <li>
            <a href="/categories">Categories</a>
            <ArrowDropDownIcon
              style={{ fontSize: "2rem", position: "relative", top: "0.5rem" }}
              onClick={() => setOpen(!open)}
              className={`icon ${open ? styles.iconOpen : ""}`}
            />
          </li>
          <li>
            <a href="/deals">Deals</a>
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
              label="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </li>
          <li>
            <a href="/account">Account</a>
            <AccountCircleIcon
              style={{ fontSize: "2rem", position: "relative", top: "0.5rem" }}
              className={styles.muiIcon}
            />
          </li>
          <li>
            <a href="/cart">Cart</a>
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
    </>
  );
}

export default Navbar;
