import { useState, createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const cartItemContext = createContext();

const CartContext = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);

    const updatedTotalPrice = (cart) => {
        setTotalPrice(() =>
            cart.reduce((acc, curr) => {
                return +(curr.price * curr.qty) + acc;
            }, 0)
        );
    };
    const updatedTotalDiscount = (cart) => {
        setTotalDiscount(() =>
            cart.reduce(
                (acc, cur) =>
                    (Number(cur.price) - Number(cur.oldPrice)) * Number(cur.qty) + acc,
                0)
        );
    };
    const addItemToCart = async (product) => {
        const encodedToken = localStorage.getItem("encodedToken");
        try {
            const addToCartItems = async (encodedToken, product) =>
                axios.post(
                    "/api/user/cart",
                    { product },
                    { headers: { authorization: encodedToken } }
                );
            if (encodedToken !== null) {
                const response = await addToCartItems(encodedToken, product);
                setCartItem(() => response.data.cart);
                updatedTotalPrice(response.data.cart);
                updatedTotalDiscount(response.data.cart);
                toast.success("Added To The Cart", {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.info("Please Login First", {
                    position: "bottom-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    const itemToRemoveFromCart = async (id) => {
        const encodedToken = localStorage.getItem("encodedToken");
        try {
            const deleteItemFromCart = async (encodedToken, id) =>
                axios.delete("/api/user/cart/" + id, {
                    headers: { authorization: encodedToken },
                });
            const response = await deleteItemFromCart(encodedToken, id);
            console.log(response);
            setCartItem(() => response.data.cart);
            updatedTotalPrice(response.data.cart);
            updatedTotalDiscount(response.data.cart);
        } catch (error) {
            console.log(error);
        }
    };
    const increaseCartQuantity = async (id) => {
        const encodedToken = localStorage.getItem("encodedToken");

        try {
            const cartQuantity = async (encodedToken, id, actionType) =>
                axios.post(
                    "/api/user/cart/" + id,
                    {
                        action: {
                            type: actionType,
                        },
                    },
                    {
                        headers: { authorization: encodedToken },
                    }
                );
            const response = await cartQuantity(encodedToken, id, "increment");
            setCartItem(response.data.cart);
            updatedTotalPrice(response.data.cart);
            updatedTotalDiscount(response.data.cart);
        } catch (error) {
            console.log(error);
        }
    };
    const decreaseQCartuantity = async (id) => {
        const encodedToken = localStorage.getItem("encodedToken");

        try {
            const cartQuantity = async (encodedToken, id, actionType) =>
            axios.post(
                "/api/user/cart/" + id,
                {
                    action: {
                        type: actionType,
                    },
                },
                {
                    headers: { authorization: encodedToken },
                }
            );
            const response = await cartQuantity(encodedToken, id, "decrement");
            setCartItem(response.data.cart);
            updatedTotalPrice(response.data.cart);
            updatedTotalDiscount(response.data.cart);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <cartItemContext.Provider value={{cartItem,setCartItem,addItemToCart,totalPrice,totalDiscount,setTotalPrice,setTotalDiscount,updatedTotalDiscount,updatedTotalPrice,itemToRemoveFromCart,increaseCartQuantity,decreaseQCartuantity}}>
                {children}
            </cartItemContext.Provider>
        </>
    )
};

export default CartContext;