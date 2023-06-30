
const encodedToken = () => localStorage.getItem("token");


export const addToCartHandler = async (product, dispatch, navigate,
  location) => {
  if (encodedToken()) {
    // console.log(encodedToken);
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        body: JSON.stringify({ product }),
        headers: {
          authorization: encodedToken(),
        },
      });
      const cartData = await response.json();
      console.log(cartData);
      // console.log(product);
      dispatch({ type: "add_to_cart", payLoad: cartData?.cart });

    } catch (error) {
      console.log(error);
    }
  } else {
    navigate("/signin", { state: { from: location?.pathname } });
  }
};
export const removeFromCartHandler = async (productId, dispatch) => {
  try {
    const response = await fetch(`/api/user/cart/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken() },
    });

    const cartData = await response.json();
    console.log(cartData);
    dispatch({ type: "remove_from_cart", payLoad: cartData?.cart });
  } catch (error) {
    console.log(error);
  }
};

export const cartQuantityHandler = async (productId, type, dispatch) => {
  try {
    console.log(productId, type);
    const response = await fetch(`/api/user/cart/${productId}`, {
      method: "POST",
      body: JSON.stringify({
        action: {
          type: type,
        },
      }),
      headers: { authorization: encodedToken() },
    });
    const cartData = await response.json();

    dispatch({ type: "update_cart_quantity", payLoad: cartData?.cart });
  } catch (error) {
    console.log(error);
  }
};

export const itemIsInCart = (cart, productId) => {
  return cart.some((product) => product._id === productId);
};