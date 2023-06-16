
const encodedToken = localStorage.getItem("token");

export const itemIsInWishlist = (wishlist, productId) => {
    return wishlist.some((product) => product._id === productId);
  };
export const addToWishlistHandler = async (product, dispatch) => {
  try {
    const response = await fetch("/api/user/wishlist", {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        authorization: encodedToken,
      },
    });
    const wishlistData = await response.json();
    dispatch({ type: "add_to_wishlist", payLoad: wishlistData?.wishlist });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishlistHandler = async (productId, dispatch) => {
  try {
    const response = await fetch(`/api/user/wishlist/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken },
    });
    const wishlistData = await response.json();
    dispatch({ type: "remove_from_wishlist", payLoad: wishlistData?.wishlist });
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
};