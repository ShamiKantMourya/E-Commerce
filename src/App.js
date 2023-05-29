import { Routes, Route } from "react-router-dom";


import { LandingPage } from "./frontend/landingPage/homePage"
import MockAPI from "./frontend/mockApi/mockApi"
import SignIn from "./frontend/authPage/signIn";
import SignUp from "./frontend/authPage/signUp";
import CartPage from "./frontend/cartPage/cartPage";
import RequireAuth from "./frontend/components/RequireAuth";
import Wishlist from "./frontend/wishlistPage/wishlist";
import Dog from "./frontend/productPage/dog";
import Cat from "./frontend/productPage/cat";
import Bird from "./frontend/productPage/bird";
import Rodent from './frontend/productPage/rodent';
import Filter from "./frontend/components/filter";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mock-api" element={<MockAPI />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={
          // <RequireAuth>
            <CartPage />
          // </RequireAuth>
        } />
        <Route path="/wishlist" element={
          // <RequireAuth>
            <Wishlist />
          // </RequireAuth>
        } />
        {/* dog page route */}
        <Route path="/dog" element={<Dog />} />

        {/* cat page route */}
        <Route path="/cat" element={<Cat />} />

        {/* bird page route */}
        <Route path="/bird" element = {<Bird />} />

        {/* rodent page route */}
        <Route path="/rodent" element = {<Rodent />}/>

        <Route path="/filter" element = {<Filter />} />
      </Routes>
     
    </>
  )
};