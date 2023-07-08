import { useContext } from "react";

import "./addressModal.css";
import { DataContext } from "../Contexts/dataContext";
import {
  addAddressHandler,
  editAddressFromModalHandler,
  cancelAddressHAndler,
  dummyAddressHandler,
} from "./addressHandler";
export const AddressModal = ({
  addressId,
  setShowAddressModal,
  newAddress,
  setNewAddress,
}) => {
  const { addDataDispatch } = useContext(DataContext);
  console.log(addressId);
  return (
    <>
      <div className="address-modal-container">
        <div className="address-modal-main">
          <p className="address-modal-title">Edit/Add Address</p>
          <div className="address-modal-input-container">
            <input
              value={newAddress.name}
              placeholder="Name"
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, name: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.area}
              placeholder="Area"
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, area: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.city}
              placeholder="City "
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, city: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.state}
              placeholder="State"
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, state: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.pincode}
              placeholder="Pincode"
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, pincode: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.phoneNumber}
              placeholder="Phone Number"
              onChange={(e) =>
                setNewAddress((pre) => ({
                  ...pre,
                  phoneNumber: e.target.value,
                }))
              }
            ></input>
            <button
            className="btn-text"
              onClick={() =>
                addAddressHandler(
                  newAddress,
                  addDataDispatch,
                  setShowAddressModal
                )
              }
            >
              Add Address
            </button>
            <button
            className="btn-text"
              onClick={() =>
                editAddressFromModalHandler(
                  addressId,
                  newAddress,
                  addDataDispatch,
                  setShowAddressModal
                )
              }
            >
              Edit Address
            </button>
            <button 
            className="btn-text"
            onClick={() => cancelAddressHAndler(setShowAddressModal)}>
              Cancel
            </button>
            <button
            className="btn-text"
            onClick={() => dummyAddressHandler(setNewAddress)}>
              Default Address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};