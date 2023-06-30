import { createContext, useEffect, useReducer } from "react";
import { initial_state, reducer } from "../Reducer/dataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initial_state);
  const { allProductData, cart, wishlist, categories,address} = state;
  const encodedToken =  localStorage.getItem("token");

  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const productsData = await response.json();
      dispatch({ type: "get_all_products", payLoad: productsData?.products });
    } catch (error) {
      console.log(error);
    }
  };
  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const category = await response.json();
      const categories = category.categories?.filter(pets => pets?.category === "pets")[0]?.items;
      dispatch({ type: "get_categories", payLoad: categories });
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await fetch("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });

      const cart = await response.json();
      console.log(cart);
      dispatch({ type: "get_cart", payLoad: cart?.cart });
    } catch (error) {
      console.log(error);
    }
  };

  const getWishlistItems = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      const wishlist = await response.json();
      dispatch({ type: "get_wishlist", payLoad: wishlist?.wishlist });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    getCategories();
  }, []);

  return (
    <DataContext.Provider
      value={{
        allProductData,
        categories,
        cart,
        wishlist,
        address,
        getCartItems,
        getWishlistItems,
        addDataDispatch: dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};