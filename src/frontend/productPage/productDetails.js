import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { BsStar } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "../productPage/productPage_Css/productDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { itemIsInCart } from "../cartPage/cartHandler";
import { itemIsInWishlist } from "../wishlistPage/wishlistHandler";
import { DataContext } from "../Contexts/dataContext";
import { addToCartHandler } from "../cartPage/cartHandler";
import { removeFromWishlistHandler, addToWishlistHandler } from "../wishlistPage/wishlistHandler";


export const ProductDetails = () => {
    const { product_id } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const { addDataDispatch, wishlist, cart } = useContext(DataContext);
    const { id, breed, image, price, rating, category, description} = productDetails;

    const isProductInCart = itemIsInCart(cart, id);
    const isProductInWishlist = itemIsInWishlist(wishlist, id);

    const navigate = useNavigate();
    const location = useLocation();

    const getProductDetails = async () => {
        try {
            const response = await fetch(`/api/products/${product_id}`);
            const data = await response.json();
            setProductDetails(data.product);
        } catch (error) {
            console.log(error);
        }
    };
    getProductDetails();
    return (
        <>
        <Header />
        <div className="detail-main-body">
            <div className="detail-body">
                <div className="detail-card">
                    <div className="img-box">
                     <img src= {image} alt= {breed} />
                    </div>
                    <div className="details">
                    <p className="detail-name"><span>Name:</span> {breed}</p>
                    <p className="detail-price"><span>Price:</span> ₹ {price}</p>
                    <p className="detail-category"><span>Category:</span> {category}</p>
                    <p className="detail-rating"><span>Rating:</span><BsStar className="detail-star"/> {rating}</p>
                    <p className="detail-description"><span>Description:</span> {description}</p>
                    <div className="btn-box">
                    {isProductInWishlist ? (
                <button
                  className="product-detail-button"
                  onClick={() => removeFromWishlistHandler(id, addDataDispatch)}
                >
                  Remove from Wishlist
                </button>
              ) : (
                <button
                  className="product-detail-button"
                  onClick={() =>
                    addToWishlistHandler(
                        productDetails,
                      addDataDispatch,
                      navigate,
                      location
                    )
                  }
                >
                  Add to Wishlist
                </button>
              )}
              {isProductInCart ? (
                <NavLink to="/cart">
                  <button className="product-detail-button">Go to Cart</button>
                </NavLink>
              ) : (
                <button
                  className="product-detail-button"
                  onClick={() =>
                    addToCartHandler(
                      productDetails,
                      addDataDispatch,
                      navigate,
                      location
                    )
                  }
                >
                  Add to Cart
                </button>
              )}
                     </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};