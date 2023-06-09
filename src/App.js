import { Routes, Route } from "react-router-dom";


import { LandingPage } from "./frontend/landingPage/homePage"
import MockAPI from "./frontend/mockApi/mockApi"
import SignIn from "./frontend/authPage/signIn";
import SignUp from "./frontend/authPage/signUp";
import CartPage from "./frontend/cartPage/cartPage";
import RequireAuth from "./frontend/components/RequireAuth";
import Wishlist from "./frontend/wishlistPage/wishlist";
// import Dog from "./frontend/productPage/dog";
// import Cat from "./frontend/productPage/cat";
// import Bird from "./frontend/productPage/bird";
// import Rodent from './frontend/productPage/rodent';
// import Filter from "./frontend/components/filter";
import ProductPage from "./frontend/productPage/productPage";
import { ProductDetails } from "./frontend/productPage/productDetails";
import { CheckoutPage } from "./frontend/checkoutPage/checkoutPage";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element = {<ProductPage />} />
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

        {/* dog page route */}
        {/* <Route path="/dog" element={<Dog />} /> */}

        {/* cat page route */}
        {/* <Route path="/cat" element={<Cat />} /> */}

        {/* bird page route */}
        {/* <Route path="/bird" element = {<Bird />} /> */}

        {/* rodent page route */}
        {/* <Route path="/rodent" element = {<Rodent />}/> */}

        {/* <Route path="/filter" element = {<Filter />} /> */}

        <Route path="/productdetails/:product_id" element = {<ProductDetails/>} />
      </Routes>
     
    </div>
  )
};