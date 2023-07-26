import React from 'react';
import { useContext } from "react";

import { DataContext } from '../../Contexts/dataContext';
import "./OrderCard.css";
import { Link } from 'react-router-dom';

const OrderCard = () => {
    const { orderList } = useContext(DataContext);

  return (
    <div>
{orderList.length > 0 ? (
          <div className="order-list-card-container">
            <p className="order-list-card-heading">My orders</p>
            {orderList?.map((product) => (
              <div className="order-card" key={product._id}>
                <div className="order-card-img-box">
                  <img src={product.image} alt={product.breed} />
                </div>

                <div className="order-card-details">
                  <p className="order-card-product-name-text">
                    {product.breed}
                  </p>
                  <div className="order-card-content-detail">
                    <p className="order-card-product-text">Qty:</p>
                    {product.qty}
                  </div>
                  <div className="order-card-content-detail">
                    <p className="order-card-product-text">Price:</p>
                    <strong>₹</strong> {product.price}
                  </div>
                  <div className="shipped-text">
                    <p className="order-card-product-text">Shipped to:</p>
                  </div>

                  <div className="shipping-address-details">
                    <p>{product?.address.name}</p>
                    <p>{product?.address.area}</p>
                    <p>
                      {product?.address.city}, {product?.address?.state},
                      {product?.address.pincode}
                    </p>
                    <p>{product?.address.phoneNumber}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-order-container">
            <p className="no-order-text">No Orders Found</p>
            <Link to="/products" className="product-page-link">
              Shop Now
            </Link>
          </div>
        )}

    </div>
  )
}

export default OrderCard;