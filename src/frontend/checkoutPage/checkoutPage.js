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
      addDataDispatch({ type: "payment" });
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
    // navigate("/products");
  };

  return (
    <>
    <Toaster position="bottom-right" reverseOrder={false} />
      <div className="payment-page">
        <h2>Checkout</h2>
        <div className="payment-page-container">
          <div className="user-address-container">
            <div className="user-address-header">
              <p className="user-address-header-title">My Addresses</p>
              <button onClick={() => setShowAddressModal(true)}>
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

            {address ? (
              address.map((addressItem) => (
                <div className="user-address">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p style={{ fontWeight: "bold" }}>{addressItem.name}</p>
                    <input
                      type="radio"
                      onChange={(e) => selectAddressHandler(e, addressItem)}
                      name="selected-address"
                    ></input>
                  </div>
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
          <div className="payment-card">
            <p className="payment-card-title">Order-Details</p>
            <hr></hr>
            <div>
              <p className="payment-card-subtitle">Items ({itemsInCart}) </p>
              <p className="payment-card-subtitle">Quantity </p>
            </div>
            {cart.map(({ _id, name, qty }) => (
              <div key={_id}>
                <p className="payment-card-subtitle">{name} </p>
                <p>{qty}</p>
              </div>
            ))}
            <p className="payment-card-title">Price Details</p>
            <hr></hr>
            <div>
              <p className="payment-card-subtitle">Total Price </p>
              <p className="payment-card-subtitle">{totalPrice} </p>
            </div>
            <div>
              <p className="payment-card-subtitle">Discount </p>
              <p className="payment-card-subtitle">{discount} </p>
            </div>
            <div>
              <p className="payment-card-subtitle">Grand Total</p>
              <p className="payment-card-subtitle">{totalPrice - discount} </p>
            </div>
            <p className="payment-card-title">Delivery Details</p>
            <hr></hr>
            {selectedAddress !== null ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
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

            <button onClick={() => paymentHandler()}>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};