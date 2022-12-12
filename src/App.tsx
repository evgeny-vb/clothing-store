import './App.css'
import React, {useEffect} from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import {useAppDispatch, useAppSelector} from "./hooks/reduxHooks";
import {categoriesActions} from "./store/categories/categories-slice";
import Footer from "./components/Footer";
import CategoriesPreview from "./components/CategoriesPreview";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(categoriesActions.fetchCategories())
  }, [])

  const isCartOpen = useAppSelector(state => state.cart.isOpen)

  return (
    <div className="">
      <Header/>
      {isCartOpen && <Cart/>}
      <CategoriesPreview/>
      <Footer/>
    </div>
  )
}

export default App
