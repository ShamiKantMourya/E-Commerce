import React from 'react'
import { useState ,useEffect} from 'react';

import "./CSS/petProductCategory.css"

const PetProductCategory = () => {
    const [productCategory , setProductCategory] = useState([]);

    const getProductData = async() => {
        try {
            const response = await fetch('/api/categories');
            const data  = await response.json();
            setProductCategory(data.categories);  
        } catch (error) {
            console.log(error)
        }
    };
    console.log(productCategory);

    useEffect(() => {
        getProductData();
      }, []);

      const product = productCategory?.filter(categoryData => categoryData.category === "petProducts")[0]?.items;

    //   console.log(product);
  return (
    <div className="products">
    <div className="line">
      <h3>
        <span>Shop for pet products</span>
      </h3>
    </div>
    <div className="product">
        {
            product?.map(({id , image , categoryName}) => (
              <div className='product-category'>
                <div className='category-item' key={id}>
                    <img className='category-image' src={image} alt='category' />
                    <h3 className='category-name'>{categoryName}</h3>
                </div>
              </div>
            ))
        }
      
    </div>
  </div>
  )
}

export default PetProductCategory;