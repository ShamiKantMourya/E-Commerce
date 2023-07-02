export const initial_state = {
  user: {},
  allProductData: [],
  cart: [],
  wishlist: [],
  categories: [],
  address: [
    {
      _id: "1",
      name: "Adarsh Balika",
      area: "Hno-3, G-1, NIketan Villa, Chatori",
      city: "Banglore",
      state: "Karnataka",
      pincode: "106040",
      phoneNumber: "756892160",
    },
    {
      _id: "2",
      name: "Shami",
      area: "Gaya, Bihar",
      city: "Gaya",
      state: "Bihar",
      pincode: "445623",
      phoneNumber: "855632511",
    },
  ],
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
        cart: [...payLoad],
      };
    case "remove_from_cart":
      return {
        ...state,
        cart: [...payLoad],
      };
    case "add_to_wishlist":
      return {
        ...state,
        wishlist: [...payLoad],
      };
    case "remove_from_wishlist":
      return {
        ...state,
        wishlist: [...payLoad],
      };
    case "update_cart_quantity":
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