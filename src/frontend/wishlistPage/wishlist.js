import React,{useContext} from 'react';

import "./wishlist.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WishlistItemContext from '../Contexts/WishlistContext';
import WIshlistCard from './WIshlistCard';

const Wishlist = () => {
  const {wishlistItem} = useContext(WishlistItemContext);
  return (
    <div>
      <Header />
      <div className='wishlist-container'>
      {
        wishlistItem.length < 1 ? (
          <h1>Add Item to wishlist</h1>
        ): (
          wishlistItem.map((items)=>(
            <div className='wishlist-item' key={items._id}>
              <WIshlistCard wishlistItem = {items} />
            </div>
          ))
        )
      }
      </div>
      <Footer />
    </div>
  )
}

export default Wishlist;