export const initial_state = {
    filter_from_category: [],
    price_range_filter: "",
    sort_string_from_filter: "",
    filter_from_rating: "",
  };
  
  export const reducer = (state, action) => {
    const { type, payLoad } = action;
    switch (type) {
      case "filter_by_category":
        return {
          ...state,
          filter_from_category: state.filter_from_category.includes(payLoad)
            ? state.filter_from_category.filter(
                (category) => category !== payLoad
              )
            : [...state.filter_from_category, payLoad],
        };
  
      case "filter_by_price_range":
        return { ...state, price_range_filter: payLoad };
  
      case "sort_by_price":
        return { ...state, sort_string_from_filter: payLoad };
  
      case "filter_by_rating":
        return { ...state, filter_from_rating: payLoad };
  
      default:
        return state;
    }
  };