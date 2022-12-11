import './App.css'
import React from "react";
import Header from "./components/Header";
import CategoryPreview from "./components/CategoryPreview";
import Cart from "./components/Cart";
import {useAppSelector} from "./hooks/reduxHooks";

function App() {
  const cartIsVisible = useAppSelector(state => state.cart.isVisible)

  return (
    <div className="">
      <Header/>
      {cartIsVisible && <Cart/>}
      <main className="pt-8 px-10 max-w-screen-2xl mx-auto">
        {/*<div className=" h-screen bg-hero"></div>*/}
        <CategoryPreview title="Hats"/>
        <CategoryPreview title="Top"/>
        <CategoryPreview title="Bottom"/>
        <CategoryPreview title="Shoes"/>
      </main>
      <footer>
        c 2022
      </footer>
    </div>
  )
}

export default App
