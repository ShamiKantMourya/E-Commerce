import { useContext } from 'react';
import { BsStar, BsFillBookmarkHeartFill } from 'react-icons/bs';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
    const { cart, wishlist, addDataDispatch } = useContext(DataContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(allProductData);
    if (filteredProducts.length === 0) return <Loader />;
    return (
        <>
            <Header />
            <Toaster position="bottom-right" reverseOrder={false} />
            <div className='main-body'>
                <div className='filter-area'>
                    <Filter />
                </div>
                <div className='breed-container'>
                    {
                        filteredProducts.map((product) => {
                            const { _id, breed, image, price, rating } = product;
                            const isProductInCart = itemIsInCart(cart, _id);
                            const isProductInWishlist = itemIsInWishlist(wishlist, _id);
                            return (
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
                                                <BsFillBookmarkHeartFill />
                                            </button>
                                        ) : (
                                            <button
                                                className="breed-wishlist"
                                                onClick={() => {
                                                    addToWishlistHandler(
                                                        product,
                                                        addDataDispatch,
                                                        navigate,
                                                        location
                                                    )
                                                }
                                                }
                                            >
                                                <BsFillBookmarkHeartFill />
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
                                        {isProductInCart ? (
                                            <button type="button" className="adoptbtn">
                                                <NavLink
                                                    to="/cart"
                                                >
                                                    Go to Cart
                                                </NavLink>
                                            </button>
                                        ) : (
                                            <button type="button"
                                                className="adoptbtn"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    addToCartHandler(
                                                        product,
                                                        addDataDispatch,
                                                        navigate,
                                                        location
                                                    )
                                                }
                                                }
                                            >
                                                Add to cart
                                            </button>
                                        )}
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductPage;