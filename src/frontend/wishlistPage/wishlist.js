import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {BsStar, BsFillBookmarkHeartFill} from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import { DataContext } from "../Contexts/dataContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addToCartHandler } from "../cartPage/cartHandler";
import { addToWishlistHandler, removeFromWishlistHandler } from "../wishlistPage/wishlistHandler";
import { itemIsInCart } from "../cartPage/cartHandler";
import { itemIsInWishlist } from "../wishlistPage/wishlistHandler";
import "./wishlist.css";


const Wishlist = () => {
    const { cart, wishlist, addDataDispatch} = useContext(DataContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(wishlist);
  return (
    <div>
        <Header/>
        <Toaster position="bottom-right" reverseOrder={false} />
        {
            wishlist.length === 0 ? (
                <div className= "cart-header-text">
                <h1>Add something to wishlist</h1>
                </div>
            ):
           wishlist.map((product) => {
            const   { _id, breed, image, price, rating } = product;
            const isProductInCart = itemIsInCart(cart, _id) 
            const isProductInWishlist = itemIsInWishlist(wishlist, _id);
               return(
               <div className='main-card'  key={_id}>
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
                       <div className='breed-image'>

                           <img src={image} alt={breed} />

                       </div>

                       <p className='breed-name'>{breed}</p>
                       <div className='price-rating'>
                           <p className='breed-price'><strong>₹</strong> {price}</p>
                           <p className='breed-rating'><BsStar className='star' />{rating}</p>
                       </div>
                       {isProductInCart ? (
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
        <Footer/>
    </div>
  )
}

export default Wishlist;