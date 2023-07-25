export const initial_state = {
  searched_product: "",
  filter_from_category: [],
  price_range_filter: "",
  sort_string_from_filter: "",
  filter_from_rating: "",
};

export const reducer = (state, action) => {
  const { type, payLoad } = action;
  console.log(payLoad, type);
  switch (type) {
    case "filter_by_category":{
      const filteredProduct = state.filter_from_category.includes(payLoad.toLowerCase())
        ? state.filter_from_category.filter(
            (category) => category !== payLoad.toLowerCase()
          )
        : [...state.filter_from_category, payLoad.toLowerCase()]
        console.log(filteredProduct)
      return {
        ...state,
    filter_from_category: filteredProduct 
      };
    }
    case "filter_by_price_range":
      return { ...state, price_range_filter: payLoad };

    case "sort_by_price":
      return { ...state, sort_string_from_filter: payLoad };

    case "filter_by_rating":
      return { ...state, filter_from_rating: payLoad };

    case "clear_all_filters":
      return {
        ...state,
        filter_from_category: [],
        price_range_filter: "",
        sort_string_from_filter: "",
        filter_from_rating: "",
        search_text: "",
      };

      case "filter_by_search":
        return {
          ...state,
          searched_product: payLoad,
        };

    default:
      return state;
  }
};