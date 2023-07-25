import { useContext } from "react";

import "./CSS/filter.css";
import { FilterContext } from "../Contexts/filterContext";


const Filter = () => {
const {filtersApplied,filterDispatch} = useContext(FilterContext);
const {
  filter_from_category,
  price_range_filter,
  sort_string_from_filter,
  filter_from_rating,
} = filtersApplied;

  const handleProductCategory = (event) => {
    filterDispatch({ type: "filter_by_category", payLoad: event.target.value });
  };
  const handleProductRatingFilter = (event) => {
    filterDispatch({ type: "filter_by_rating", payLoad: event.target.value });
  };
  const handleSortFilter = (event) => {
    filterDispatch({ type: "sort_by_price", payLoad: event.target.value });
  };
  const handleRangeFilter = (event) => {
    filterDispatch({ type: "filter_by_price_range", payLoad: event.target.value });
  };
  const clearHandler = (event) => {
    filterDispatch({ type: "clear_all_filters" });
  };

  return (
    <>
      <div className='filter-container'>
        <div className='filter-child-container'>
          <div className="filter-header">
            <h3 className='header-txt'>Filters</h3>
            <button className="clear-btn" onClick={clearHandler}>Clear</button>
          </div>
          <div className="filter-by-category">
            <h4 className='filter-txt'>Categories</h4>
            <div className='input-category'>
              <input type='checkbox' value='dog'
              checked={filter_from_category.includes("dog")} 
               onChange={handleProductCategory} />
              <p className='category'>Dog</p>
            </div>
            <div className='input-category'>
              <input type='checkbox' value='cat' 
              checked={filter_from_category.includes("cat")}
              onChange={handleProductCategory} />
              <p className='category'>Cat</p>
            </div>
            <div className='input-category'>
              <input type='checkbox' value='bird' 
              checked={filter_from_category.includes("bird")}
              onChange={handleProductCategory} />
              <p className='category'>Bird</p>
            </div>
            <div className='input-category'>
              <input type='checkbox' value='rodent' 
              checked={filter_from_category.includes("rodent")}
              onChange={handleProductCategory} />
              <p className='category'>Rodent</p>
            </div>
          </div>
          <div className="product-rating">
            <h4 className="rating-txt">Filter By Ratings</h4>
            <div className="rating-options">
              <input
                type="radio"
                name="rating"
                checked={filter_from_rating === "4.5"}
                onChange={handleProductRatingFilter}
                value="4.5"
              />
            <p className="ratings">4.5 and above</p>  
            </div>
            <div  className="rating-options">
              <input
                type="radio"
                name="rating"
                checked={filter_from_rating === "4"}
                onChange={handleProductRatingFilter}
                value="4"
              />
            <p className="ratings">4 and above</p> 
            </div>
            <div  className="rating-options">
              <input
                type="radio"
                name="rating"
                checked={filter_from_rating === "3"}
                onChange={handleProductRatingFilter}
                value="3"
              />
            <p className="ratings">3 and above</p> 
            </div>
            <div  className="rating-options">
              <input
                type="radio"
                name="rating"
                checked={filter_from_rating === "2"}
                onChange={handleProductRatingFilter}
                value="2"
              />
            <p className="ratings">2 and above</p> 
            </div>
            <div  className="rating-options">
              <input
                type="radio"
                name="rating"
                checked={filter_from_rating === "1"}
                onChange={handleProductRatingFilter}
                value="1"
              />
            <p className="ratings">1 and above</p> 
            </div>
          </div>
          <div className='filter-sort'>
            <h4 className='filter-txt'>Sort By Price</h4>
            <div className='sort-input'>
              <input type='radio' value='lowtohigh' name='sort' 
              checked={sort_string_from_filter === "lowtohigh"}
              onChange={handleSortFilter} />
              <p className='price-tag'>Low To High</p>
            </div>
            <div className='sort-input'>
              <input type='radio' value='hightolow' name='sort' 
              checked={sort_string_from_filter === "hightolow"}
              onChange={handleSortFilter} />
              <p className='price-tag'>High To Low</p>
            </div>
          </div>
          <div className='filter-range'>
            <h4 className='filter-txt'>Filter By Range</h4>
            <input type='range' onChange={handleRangeFilter} value={price_range_filter}
              min={1000}
              max={20000} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter;