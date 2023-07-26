import { Routes, Route } from "react-router-dom";


import { LandingPage } from "./frontend/landingPage/homePage"
import MockAPI from "./frontend/mockApi/mockApi"
import SignIn from "./frontend/authPage/signIn";
import SignUp from "./frontend/authPage/signUp";
import CartPage from "./frontend/cartPage/cartPage";
import RequireAuth from "./frontend/components/RequireAuth";
import Wishlist from "./frontend/wishlistPage/wishlist";
import UserProfile from "./frontend/UserProfile/UserProfile";
import ProductPage from "./frontend/productPage/productPage";
import { ProductDetails } from "./frontend/productPage/productDetails";
import { CheckoutPage } from "./frontend/checkoutPage/checkoutPage";
import "./App.css";
import PageNotFound from "./frontend/components/PageNotFound/PageNotFound";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={
          <RequireAuth>
            <CartPage />
          </RequireAuth>
        } />
        <Route path="/wishlist" element={
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        } />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckoutPage />
            </RequireAuth>
          } />
          <Route
            path="/profile"
            element={
              <RequireAuth>
              <UserProfile />
              </RequireAuth>
            }
          />
            <Route
            path="/address"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
            <Route
            path="/orderSummary"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
        <Route path="/productdetails/:product_id" element={<ProductDetails />} />
        <Route
          path="*"
          element={
            <PageNotFound />
          } />
      </Routes>

    </div>
  )
};