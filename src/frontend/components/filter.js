import React from 'react';


const Filter = () => {
  const handleProductPrice = (event) => {

  };
  const handleSortFilter = (event) => {

  };
  const handleRangeFilter = (event) => {

  };

  return (
    <>
    <div className='filter-container'>
        <h3 className='header-txt'>Filters</h3>
        <div className='filter-by-price'>
          <h4 className='filter-txt'>Price</h4>
          <div className='input-price'>
            <input type='checkbox' value= '5000+' onChange={handleProductPrice} />
            <p>Above 5k</p>
            </div>
            <div className='input-price'>
            <input type='checkbox' value='10000+' onChange={handleProductPrice} />
            <p>Above 10k</p>
            </div>
            <div className='input-price'>
            <input type='checkbox' value= '15000+' onChange={handleProductPrice} />
            <p>Above 15k</p>
            </div>
            <div className='input-price'>
            <input type='checkbox' value= '20000+' onChange={handleProductPrice} />
            <p>Above 20k</p>
            </div>
        </div>
        <div className='filter-sort'>
          <h4 className='filter-txt'>Sort By Price</h4>
          <div className='sort-input'>
               <input type='radio' value= 'lowtohigh' name='sort' onChange={handleSortFilter} />
               <p>Low To High</p>
          </div>
          <div className='sort-input'>
               <input type='radio' value= 'hightolow' name='sort' onChange={handleSortFilter} />
               <p>High To Low</p>
          </div>
        </div>
        <div className='filter-range'>
          <h4 className='filter-txt'>Filter By Range</h4>
          <input type='range' onChange={handleRangeFilter} value='' />
        </div>
    </div>
    </>
  )
}

export default Filter;