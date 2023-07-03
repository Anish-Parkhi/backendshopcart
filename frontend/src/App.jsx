import "./App.css";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import Deals from "./components/Deals/Deals";
// import Landing from "./components/Landing/Landing";
import Product from "./components/Product/Product";
import Signin from "./components/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/account" element={<Account />} />
      <Route path="/deals" element={<Deals />} />
    </Routes>
  );
}

export default App;
