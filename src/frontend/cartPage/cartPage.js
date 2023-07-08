import { useContext } from "react";
import { Toaster } from "react-hot-toast";

import { DataContext } from "../Contexts/dataContext";
import { CartCard } from "./cartCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckoutCard } from "../components/checkoutCard";
import "./cartpage.css";

const CartPage = () => {
  const { cart } = useContext(DataContext);
  console.log(cart);
  return (
    <div>
      <Header />
      <Toaster position="bottom-right" reverseOrder={false} />
      {
        cart.length === 0 ? (
          <div className= "cart-header-text">
          <h1>Add something to cart</h1>
          </div>
        ) : (
          <div>
            <h1>Cart ({cart.length})</h1>
            <div className="cart-container-data">
              <div className="cart-cards-container">
                {cart.map((product) => (
                  <CartCard product={product} />
                ))}
              </div>
              <div className="checkout">
              <CheckoutCard />
              </div>
            </div>
          </div>
        )
      }
      <Footer />
    </div>
  )
}

export default CartPage;
