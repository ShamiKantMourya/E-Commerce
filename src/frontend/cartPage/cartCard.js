import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa"

import "./cartCard.css"
import {itemIsInWishlist} from "../wishlistPage/wishlistHandler";
import { DataContext } from "../Contexts/dataContext";
import {cartQuantityHandler, removeFromCartHandler} from "./cartHandler";
import {addToWishlistHandler, removeFromWishlistHandler} from "../wishlistPage/wishlistHandler";

export const CartCard = ({ product }) => {
    const { _id, breed, price, image, qty, rating } =
      product;
  
    const {wishlist, addDataDispatch } =
      useContext(DataContext);
  
    const isProductInWishlist = itemIsInWishlist(wishlist, _id);
    const navigate = useNavigate();
    const location = useLocation();
  
    return (
      <>
        <div className="cart-card-container">
          <img src={image} alt={breed} />
          <div className="cart-card-content">
            <div className="cart-card-title">
              <span>{breed}</span>
              <span className="cart-card-rating">
              <FaStar /> {rating} 
              </span>
            </div>
            <span>{price}</span>
            <div className="cart-quantity-handler">
              <button
                onClick={() => cartQuantityHandler(_id, "increment", addDataDispatch)}
              >
                +
              </button>
              <p>{qty}</p>
              <button
                onClick={() => cartQuantityHandler(_id, "decrement", addDataDispatch)}
              >
                -
              </button>
            </div>
            <div className="cart-card-buttons">
              <button
                className="cart-card-button"
                onClick={() => removeFromCartHandler(_id, addDataDispatch)}
              >
                Remove From Cart
              </button>
              {isProductInWishlist ? (
                <button
                  className="cart-card-button"
                  onClick={() => removeFromWishlistHandler(_id, addDataDispatch)}
                >
                  Remove from Wishlist
                </button>
              ) : (
                <button
                  className="cart-card-button"
                  onClick={() =>
                    addToWishlistHandler(
                      product,
                      addDataDispatch,
                      navigate,
                      location
                    )
                  }
                >
                  Add to Wishlist
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };
