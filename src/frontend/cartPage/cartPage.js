import { useContext } from "react";
// import { ToastContainer } from "react-toastify";

import { DataContext } from "../Contexts/dataContext";
import { CartCard } from "./cartCard";
import Header from "../components/Header";
import Footer from "../components/Footer";


const CartPage = () => {
  const { cart } = useContext(DataContext);
  return (
    <div>
      <Header />
      {
        cart.length === 0 ? (
          <h1>Add something to cart</h1>
        ) : (
          <div>
            {/* <h1>Cart ({cart.length})</h1> */}
            <div className="cart-container">
            <div className="cart-cards-container">
              {cart.map((product) => (
                <CartCard product={product} />
              ))}
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
