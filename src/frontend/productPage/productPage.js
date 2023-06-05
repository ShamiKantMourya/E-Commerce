import { useContext } from 'react';
import { BsBookmarkHeartFill, BsStar } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

import "./productPage_Css/breed.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/filter";
import { FilterContext } from '../Contexts/filterContext';
import { DataContext } from '../Contexts/dataContext';
import { getFilteredProducts } from '../filterFunctions';
import Loader from "../components/Loader";

const ProductPage = () => {
    const { allProductData } = useContext(DataContext);
    const { filtersApplied } = useContext(FilterContext);
    const filteredProducts = getFilteredProducts(allProductData, filtersApplied);
    console.log(filteredProducts);
    if (filteredProducts.length === 0) return <Loader />;
    return (
        <>
            <Header />
            <div className='main-body'>
                <div className='filter-area'>
                    <Filter />
                </div>
                <div className='breed-container'>
                    {
                        filteredProducts.map(({ _id, breed, image, price, rating }) => (
                            <div className='main-card' key={_id}>
                                    <div className='breed-card'>
                                        <button className='breed-wishlist'><BsBookmarkHeartFill /></button>
                                        <div className='breed-image'>
                                            <img src={image} alt={breed} />
                                        </div>
                                        <p className='breed-name'>{breed}</p>
                                        <div className='price-rating'>
                                            <p className='breed-price'><strong>₹</strong> {price}</p>
                                            <p className='breed-rating'><BsStar className='star' />{rating}</p>
                                        </div>
                                        <button className='adoptbtn'>Adopt Now</button>
                                        
                                    </div>
                            </div>

                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductPage;