const filterByCategories = (products, filtersApplied) => {
    return filtersApplied.filter_from_category.length > 0
      ? products.filter(({ category }) =>
      filtersApplied.filter_from_category.some(
            (filter) => filter === category
          )
        )
      : products;
  };
  
  const sortByPrice = (products, filtersApplied) => {
    return filtersApplied.sort_string_from_filter.length > 0
      ? filtersApplied.sort_string_from_filter === "lowtohigh"
        ? products.sort((a, b) => a.price - b.price)
        : products.sort((a, b) => b.price - a.price)
      : products;
  };
  
  const filterByRating = (products, filtersApplied) => {
    return filtersApplied.filter_from_rating > 0
      ? products.filter(
          ({ rating }) => rating > Number(filtersApplied.filter_from_rating)
        )
      : products;
  };
  
  const filterByPriceRange = (products, filtersApplied) => {
    return filtersApplied.price_range_filter > 0
      ? products.filter(
          ({ price }) => price > Number(filtersApplied.price_range_filter)
        )
      : products;
  };

  const filterBySearch = (products, filtersApplied) => {
    return filtersApplied.searched_product.length > 0
      ? products.filter(({ product }) =>
          product.toLowerCase().includes(filtersApplied.searched_product.toLowerCase())
        )
      : products;
  };
  export const getFilteredProducts = (products, filtersApplied) => {
    const filterFunctions = [
      filterBySearch,
      filterByCategories,
      sortByPrice,
      filterByRating,
      filterByPriceRange,
    ];
  
    return filterFunctions.reduce(
      (acc, func) => func(acc, filtersApplied),
      products
    );
  };