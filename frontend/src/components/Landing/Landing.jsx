import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
function Landing() {
  return (
    <div>
      <Navbar />
      <Home headline="Grab Upto 50% Off On Selected Headphone" />
      <Product
        name="Airpod-Max"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce, pulvinar urna cum."
        price="$549.00"
      />
      <Cart name="Airpods Pro+" price="$549.00" quantity="1" />
    </div>
  );
}

export default Landing;
