import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";


export const WishlistItemContext = createContext();

const WishlistContext = ({ children }) => {
  const [wishlistItem, setWishlistItem] = useState([]);

  const addItemToWishlist = async (product) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      const addToWishlist = async (encodedToken, product) =>
      axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: encodedToken } }
      );
      if (encodedToken !== null) {
        const response = await addToWishlist(encodedToken, product);
        setWishlistItem(() => response.data.wishlist);
        toast.success("Added To The Wishlist", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.info("Please Login First", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeItemFromWishlist = async (id) => {
    const encodedToken = localStorage.getItem("encodedToken");
    try {
      const deleteItemFromWishlist = async (encodedToken, id) =>
      axios.delete("/api/user/wishlist/" + id, {
        headers: { authorization: encodedToken },
      });
      if (encodedToken !== null) {
        const response = await deleteItemFromWishlist(encodedToken, id);
        setWishlistItem(() => response.data.wishlist);
        toast.info("Removed From Wishlist", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.info("Please Login First", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <WishlistItemContext.Provider value={{wishlistItem, setWishlistItem,addItemToWishlist, removeItemFromWishlist}}>
      {children}
    </WishlistItemContext.Provider>
  )

};

export default WishlistContext;