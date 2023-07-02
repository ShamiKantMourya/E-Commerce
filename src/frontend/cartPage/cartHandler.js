import toast from "react-hot-toast";

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
      // console.log(cartData);
      // console.log(product);
      if (response.status === 201) {
        dispatch({ type: "add_to_cart", payLoad: cartData?.cart });
        toast.success("Item added to cart.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#252525",
            color: "whitesmoke",
          },
        });
      }
      // dispatch({ type: "add_to_cart", payLoad: cartData?.cart });

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
    dispatch({ type: "remove_from_cart", payLoad: cartData?.cart });
    toast.error("Item removed from cart!", {
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
    console.log(cartData);
    dispatch({ type: "update_cart_quantity", payLoad: cartData?.cart });
  } catch (error) {
    console.log(error);
  }
};

export const itemIsInCart = (cart, productId) => {
  return cart.some((product) => product._id === productId);
};