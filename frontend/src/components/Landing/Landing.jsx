import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
// import Product from "../Product/Product";
// import Cart from "../Cart/Cart";
import React from "react";
export const ProductContext = React.createContext();
function Landing() {
  return (
    <ProductContext.Provider value="Anish Parkhi">
      <Navbar />
      <Home headline="Grab Upto 50% Off On Selected Headphone" />
    </ProductContext.Provider>
  );
}

export default Landing;
