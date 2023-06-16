import { useContext } from 'react';
import { BsStar } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./productPage_Css/breed.css";
import { itemIsInCart } from "../cartPage/cartHandler";
import { itemIsInWishlist } from "../wishlistPage/wishlistHandler";
import { addToCartHandler } from "../cartPage/cartHandler";
import { addToWishlistHandler, removeFromWishlistHandler } from "../wishlistPage/wishlistHandler";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/filter";
import { FilterContext } from '../Contexts/filterContext';
import { DataContext } from '../Contexts/dataContext';
import { getFilteredProducts } from '../filterFunctions';
import Loader from "../components/Loader";

const ProductPage = () => {
    const { allProductData } = useContext(DataContext);
    const { filtersApplied } = useContext(FilterContext);
    const filteredProducts = getFilteredProducts(allProductData, filtersApplied);
    const { cart, wishlist, addDataDispatch } =
        useContext(DataContext);
    const { _id } = allProductData;
    const isProductInWishlist = itemIsInWishlist(wishlist, _id);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(allProductData);
    // console.log(filteredProducts);
    if (filteredProducts.length === 0) return <Loader />;
    return (
        <>
            <Header />
            <div className='main-body'>
                <div className='filter-area'>
                    <Filter />
                </div>
                <div className='breed-container'>
                    <ToastContainer />
                    {
                        filteredProducts.map((product) => {
                         const   { _id, breed, image, price, rating } = product;
                            return(
                            <div className='main-card' key={_id}>

                                <div className='breed-card'>
                                    <NavLink to={`/productdetails/${_id}`}>
                                        <div className='bgClickLayer'></div>
                                    </NavLink>
                                    {isProductInWishlist ? (
                                        <button
                                            style={{ color: "red" }}
                                            className="breed-wishlist"
                                            onClick={() =>
                                                removeFromWishlistHandler(_id, addDataDispatch)
                                            }
                                        >
                                            <FaHeart />
                                        </button>
                                    ) : (
                                        <button
                                            className="breed-wishlist"
                                            onClick={() =>
                                                addToWishlistHandler(
                                                    product,
                                                    addDataDispatch,
                                                    navigate,
                                                    location
                                                )
                                            }
                                        >
                                            <FaHeart />
                                        </button>
                                    )}
                                    <div className='breed-image'>

                                        <img src={image} alt={breed} />

                                    </div>

                                    <p className='breed-name'>{breed}</p>
                                    <div className='price-rating'>
                                        <p className='breed-price'><strong>₹</strong> {price}</p>
                                        <p className='breed-rating'><BsStar className='star' />{rating}</p>
                                    </div>
                                    {itemIsInCart(cart, _id) ? (
                                        <button className="adoptbtn">
                                            <NavLink
                                                to="/cart"
                                            >
                                                Go to Cart
                                            </NavLink>
                                        </button>
                                    ) : (
                                        <button
                                            className="adoptbtn"
                                            onClick={() =>
                                                addToCartHandler(
                                                    product,
                                                    addDataDispatch,
                                                    navigate,
                                                    location
                                                )
                                            }
                                        >
                                            Add to cart
                                        </button>
                                    )}
                                </div>
                            </div>

                        )})
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductPage;