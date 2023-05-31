// import { useContext } from 'react';

import "./CSS/filter.css";
// import { FilterContext } from '../Contexts/filterContext';


const Filter = () => {
  // const {state ,filterDispatch} = useContext(FilterContext);

  const handleProductPrice = (event) => {
    // filterDispatch({ type: "filter_by_price", payLoad: event.target.value });
  };
  const handleSortFilter = (event) => {
    // filterDispatch({ type: "sort_by_price", payLoad: event.target.value });
  };
  const handleRangeFilter = (event) => {
    // filterDispatch({ type: "filter_by_price_range", payLoad: event.target.value });
  };

  return (
    <>
    <div className='filter-container'>
      <div className='filter-child-container'>
        <h3 className='header-txt'>Filters</h3>
        <div className='filter-by-price'>
          <h4 className='filter-txt'>Price</h4>
          <div className='input-price'>
            <input type='checkbox' value= '5000+' onChange={handleProductPrice} />
            <p className='price-tag'>Above 5k</p>
            </div>
            <div className='input-price'>
            <input type='checkbox' value='10000+' onChange={handleProductPrice} />
            <p className='price-tag'>Above 10k</p>
            </div>
            <div className='input-price'>
            <input type='checkbox' value= '15000+' onChange={handleProductPrice} />
            <p className='price-tag'>Above 15k</p>
            </div>
            <div className='input-price'>
            <input type='checkbox' value= '20000+' onChange={handleProductPrice} />
            <p className='price-tag'>Above 20k</p>
            </div>
        </div>
        <div className='filter-sort'>
          <h4 className='filter-txt'>Sort By Price</h4>
          <div className='sort-input'>
               <input type='radio' value= 'lowtohigh' name='sort' onChange={handleSortFilter} />
               <p className='price-tag'>Low To High</p>
          </div>
          <div className='sort-input'>
               <input type='radio' value= 'hightolow' name='sort' onChange={handleSortFilter} />
               <p className='price-tag'>High To Low</p>
          </div>
        </div>
        <div className='filter-range'>
          <h4 className='filter-txt'>Filter By Range</h4>
          <input type='range' onChange={handleRangeFilter} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Filter;