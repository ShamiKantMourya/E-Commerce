import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { BsFillBookmarkHeartFill, BsStar } from "react-icons/bs";


import "./cartCard.css"
import { itemIsInWishlist } from "../wishlistPage/wishlistHandler";
import { DataContext } from "../Contexts/dataContext";
import { cartQuantityHandler, removeFromCartHandler } from "./cartHandler";
import { addToWishlistHandler, removeFromWishlistHandler } from "../wishlistPage/wishlistHandler";

export const CartCard = ({ product }) => {
  const { _id, breed, price, image, qty, rating } = product;
  console.log(product);
  const { wishlist, addDataDispatch } =
    useContext(DataContext);

  const isProductInWishlist = itemIsInWishlist(wishlist, _id);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
          
          <div className="cart-container" key={_id}>
            <div className="cart-image">
              <img src={image} alt={breed} />
            </div>
            <div className="cart-content">
              <p className="cart-breed-name">{breed}</p>
              <div className="cart-price-rating">
                <span className="cart-price"><strong>₹</strong>{price}</span>
                <span className="cart-rating">
                <BsStar className='star' /> {rating}
                </span>
              </div>
              <div className="cart-quantity-handler">
                <button className="inc-dec-btn"
                  onClick={() => cartQuantityHandler(_id, "increment", addDataDispatch)}
                >
                  +
                </button>
                <p className="quantity">{qty}</p>
                <button className="inc-dec-btn"
                  onClick={() => qty <= 1 ? removeFromCartHandler(_id, addDataDispatch) : cartQuantityHandler(_id, "decrement", addDataDispatch)}
                >
                  -
                </button>
              </div>
              <button
                className="remove-cart-card-button"
                onClick={() => removeFromCartHandler(_id, addDataDispatch)}
              >
                Remove From Cart
              </button>
              {isProductInWishlist ? (
                <button
                  style={{ color: "red" }}
                  className="cart-card-button"
                  onClick={() => removeFromWishlistHandler(_id, addDataDispatch)}
                >
                  <BsFillBookmarkHeartFill />
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
                  <BsFillBookmarkHeartFill />
                </button>
              )}
            </div>
          </div>
    </>
  );
};
