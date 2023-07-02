import toast from "react-hot-toast";

const encodedToken =() =>  localStorage.getItem("token");

export const itemIsInWishlist = (wishlist, productId) => {
  // console.log(productId);
    return wishlist.some((product) => product._id === productId);
  };

export const addToWishlistHandler = async (product, dispatch,navigate,
  location) => {
    if(encodedToken()){ 
      try {
    const response = await fetch("/api/user/wishlist", {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        authorization: encodedToken(),
      },
    });
    const wishlistData = await response.json();
    if (response.status === 201) {
      dispatch({ type: "add_to_wishlist", payLoad: wishlistData?.wishlist });
      toast.success("Item added to wishlist.!", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
    }

  } catch (error) {
    console.log(error);
  }
}else{
  navigate("/signin", { state: { from: location?.pathname } });
}
};

export const removeFromWishlistHandler = async (productId, dispatch) => {
  console.log(productId);
  try {
    const response = await fetch(`/api/user/wishlist/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken() },
    });
    const wishlistData = await response.json();
    console.log(wishlistData);
    dispatch({ type: "remove_from_wishlist", payLoad: wishlistData?.wishlist });
    toast.error("Item removed from wishlist!", {
      style: {
        fontSize: "large",
        padding: ".5rem",
        background: "#252525",
        color: "whitesmoke",
      },
    });
  } catch (error) {
    console.log(error);
  }
};