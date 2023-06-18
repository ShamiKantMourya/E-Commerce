export const initial_state = {
    allProductData: [],
    cart: [],
    wishlist: [],
    categories: [],
  };
  
  export const reducer = (state, action) => {
    const { type, payLoad, addressId } = action;
    switch (type) {
      case "get_all_products":
        return { ...state, allProductData: [...payLoad] };
      case "get_categories":
        return { ...state, categories: [...payLoad] };

      case "get_cart":
          return {
            ...state,
            cart: [...payLoad],
          };
          
      case "add_to_cart":
        return {
          ...state,
          cart: state.cart.includes(payLoad)
            ? state.cart
            : [...state.cart, payLoad],
        };
      case "remove_from_cart":
        return {
          ...state,
          cart: state.cart.includes(payLoad)
            ? state.cart.filter(({ _id }) => _id !== payLoad)
            : state.cart,
        };
      case "add_to_wishlist":
          return {
            ...state,
            wishlist: state.wishlist.includes(payLoad)
              ? state.wishlist
              : [...state.wishlist, payLoad],
          };
      case "remove_from_wishlist":
        return {
          ...state,
          wishlist: state.wishlist.includes(payLoad)
            ? state.wishlist.filter(({ _id }) => _id !== payLoad)
            : state.wishlist,
        };
      case "get_user_details":
      return {
        ...state,
        user: { ...state.user, ...payLoad },
      };
      case "update_quantity":
        return {
          ...state,
          cart: [...payLoad],
        };
      case "payment":
        return {
          ...state,
          cart: [],
        };
      case "delete_address":
        return {
          ...state,
          address: state.address.filter(({ _id }) => _id !== payLoad),
        };
      case "add_address":
        return {
          ...state,
          address: [...state.address, payLoad],
        };
      case "edit_address":
        return {
          ...state,
          address: state.address.map((address) =>
            address._id === addressId ? { ...payLoad } : address
          ),
        };
      default:
        return state;
    }
  };