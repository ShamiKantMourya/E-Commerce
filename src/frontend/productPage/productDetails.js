import { useState } from "react";
import { useParams } from "react-router";
import { BsStar } from 'react-icons/bs';

import "../productPage/productPage_Css/productDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const ProductDetails = () => {
    const { product_id } = useParams();
    const [productDetails, setProductDetails] = useState([]);

    const getProductDetails = async () => {
        try {
            const response = await fetch(`/api/products/${product_id}`);
            const data = await response.json();
            setProductDetails(data.product);
        } catch (error) {
            console.log(error);
        }
    };
    getProductDetails();
    return (
        <>
        <Header />
        <div className="detail-main-body">
            <div className="detail-body">
                <div className="detail-card">
                    <div className="img-box">
                     <img src= {productDetails.image} alt= {productDetails.breed} />
                    </div>
                    <div className="details">
                    <p className="detail-name"><span>Name:</span> {productDetails.breed}</p>
                    <p className="detail-price"><span>Price:</span> ₹ {productDetails.price}</p>
                    <p className="detail-category"><span>Category:</span> {productDetails.category}</p>
                    <p className="detail-rating"><span>Rating:</span><BsStar className="detail-star"/> {productDetails.rating}</p>
                    <p className="detail-description"><span>Description:</span> {productDetails.description}</p>
                    <div className="btn-box">
                        <button className="addtocart">ADD TO CART</button>
                        <button className="addtowishlist">ADD TO WISHLIST</button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};