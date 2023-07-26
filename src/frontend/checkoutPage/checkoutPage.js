import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { DataContext } from "../Contexts/dataContext";
// import {
//   editAddressHandler,
//   deleteAddressHandler,
//   addAddressHandler,
// } from "../addressPage/addressHandler";
import { removeFromCartHandler } from "../cartPage/cartHandler";
import { AddressModal } from "../addressPage/addressModal";
import "./checkoutPage.css";

export const CheckoutPage = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    _id: uuid(),
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  });
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressToBeEdited, setAddressToBeEdited] = useState({});
  const { address, cart, addDataDispatch } = useContext(DataContext);
  const itemsInCart = cart.length;
  const discount = 235;
  const totalPrice = cart.reduce((acc, { price, qty }) => acc + price * qty, 0);

  const navigate = useNavigate();
  const selectAddressHandler = (e, address) => {
    e.target.checked && setSelectedAddress(address);
  };

  const paymentHandler = () => {
    if (selectedAddress) {
      const myOrders = cart?.map((product) => ({
        ...product,
        address: selectedAddress,
      }));

      cart?.forEach(({ _id }) =>
      removeFromCartHandler(_id, addDataDispatch)
      );

      addDataDispatch({ type: "payment", payLoad: myOrders });
      toast.success("Order placed Sucessfully.!", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
    } else {
      toast.warning("Order not placed.! Add address ", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
    }
    setTimeout(() => navigate("/products"), 2000);
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="payment-page">
        <h2>Checkout</h2>
        <div className="payment-page-container">
          <div className="user-address-container">
            <div className="user-address-header helper-header">
              <p className="user-address-header-title ">My Addresses</p>
              <button className="add-address-btn" onClick={() => setShowAddressModal(true)}>
                Add New Address
              </button>
            </div>
            {showAddressModal && (
              <AddressModal
                addressId={addressToBeEdited}
                setShowAddressModal={setShowAddressModal}
                newAddress={newAddress}
                setNewAddress={setNewAddress}
              />
            )}
            <div className="user-address-box">
            {address ? (
              address.map((addressItem) => (
                <div className="user-address">
                  <div>
                    <input
                      type="radio"
                      onChange={(e) => selectAddressHandler(e, addressItem)}
                      name="selected-address"
                    ></input>
                  </div>
                  <p style={{fontWeight: "600"}}>{addressItem.name}</p>
                  <p>{addressItem.area}</p>
                  <p>
                    {addressItem.city}, {addressItem.state},{" "}
                    {addressItem.pincode}
                  </p>
                  <p>{addressItem.phoneNumber}</p>
                </div>
               
              ))
            ) : (
              <h1>No Address Found</h1>
            )}
      </div>
          </div>
          <div className="payment-card">
            <p className="payment-card-title helper-header">Order-Details</p>
            <div className="payment-order-details">
            <div>
              <p className="payment-txt-item">Items ({itemsInCart}) </p>
            </div>
            {cart.map(({ _id, breed, qty }) => (
              <div key={_id}>
                <p className="payment-txt-item">Product Name: {breed} </p>
                <p className="payment-txt-item">Quantity: {qty}</p>
              </div>
            ))}
            <div className="payment-card-subtitle">
              <p className="payment-txt"> Price: </p>
              <p className="payment-data">{totalPrice} </p>
            </div>
            <div className="payment-card-subtitle">
              <p className="payment-txt">Discount: </p>
              <p className="payment-data">{discount} </p>
            </div>
            <div className="payment-card-subtitle">
              <p className="payment-txt">Grand Total:</p>
              <p className="payment-data">{totalPrice - discount} </p>
            </div>
          </div>
            <p
            className="payment-card-title">Delivery Details</p>
            {selectedAddress !== null ? (
              <div className="user-delivery-details">
                <p style={{ fontWeight: "bold" }}>{selectedAddress.name}</p>

                <p>{selectedAddress.area}</p>
                <p>
                  {selectedAddress.city}, {selectedAddress.state},{" "}
                  {selectedAddress.pincode}
                </p>
                <p>{selectedAddress.phoneNumber}</p>
              </div>
            ) : (
              <p className="payment-card-subtitle">No Address Found</p>
            )}
          <div className="proceed-btn-box">
          <button className="proceed-btn" onClick={() => paymentHandler()}>Proceed to Payment</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};