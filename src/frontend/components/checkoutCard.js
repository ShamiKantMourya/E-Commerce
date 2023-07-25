import { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "../Contexts/dataContext";
import "./CSS/checkoutCard.css";

export const CheckoutCard = () => {
    const { cart } = useContext(DataContext);
    // console.log(allProductData);
    //    const discountPrice = allProductData.map((data) => data.discount);
    //     console.log(discountPrice);
    const noOfItemsInCart = cart.length;
    const discount = 235;
    const totalPrice = cart.reduce((acc, { price, qty }) => acc + qty * price, 0);
    // console.log(typeof(totalPrice));
    // console.log(typeof(discount));
    const discountedPrice = totalPrice - discount;
    const savings = totalPrice - discountedPrice;
    const percent = 100 - (discountedPrice / totalPrice * 100);

    return (
        <div>
            <div className="main-box">
                <div className="checkoutCard-box">
                    <div className="checkoutCard-heading">
                        <h2>Price Details</h2>
                    </div>
                    <p>Total Price: <strong>₹</strong> {totalPrice}</p>
                    <p>Discount: <strong>₹</strong> {discount}</p>
                    <p>Order Total:<strong>₹</strong> {discountedPrice}</p>
                    <hr />
                    <p>Your Savings: <strong>₹</strong> {discount} <span>({percent}%)</span></p>
                </div>
                <Link to="/checkout" className="btn-checkout-link">
                    <button type="button" className="checkout-button">
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    )
}