import './App.css'
import React from "react";
import Header from "./components/Header";
import CategoryPreview from "./components/CategoryPreview";

function App() {

  return (
    <div className="">
      <Header/>
      <main className="pt-8 px-10">
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
