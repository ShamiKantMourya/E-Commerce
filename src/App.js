import {Routes , Route} from "react-router-dom";


import { LandingPage } from "./frontend/landingPage/homePage"
import MockAPI from "./frontend/mockApi/mockApi"
import SignIn from "./frontend/authPage/signIn";
import SignUp from "./frontend/authPage/signUp";
import CartPage from "./frontend/cartPage/cartPage";
import RequireAuth from "./frontend/components/RequireAuth";
import ProductPage from "./frontend/productPage/productPage";
import Wishlist from "./frontend/wishlistPage/wishlist";


export default function App(){
  return(
    <>
    <Routes>
            <Route path = "/" element = {<LandingPage />} />
            <Route path = "/mock-api" element = {<MockAPI />} />
            <Route path="/signin" element = {<SignIn />} />
            <Route path="/signup" element = {<SignUp />} />
            <Route path="/cart" element = { 
            // <RequireAuth>
              <CartPage />
            // </RequireAuth>
          } />
            <Route path="/product" element = {
              // <RequireAuth>
                <ProductPage />
              // </RequireAuth>
            } />
             <Route path="/wishlist" element = {
              <RequireAuth>
                <Wishlist />
              </RequireAuth>
            } />
    </Routes>
    </>
  )
};