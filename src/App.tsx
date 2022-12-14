import './App.css'
import React, {Suspense, useEffect} from "react";
import {useAppDispatch} from "./hooks/reduxHooks";
import {categoriesActions} from "./store/categories/categories-slice";
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"))
const Shop = React.lazy(() => import("./pages/Shop"))



function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(categoriesActions.fetchCategories())
  }, [])

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/*@todo add redirect if valid category not found*/}
          <Route path="shop/:category" element={<Shop/>}/>
        </Routes>
      </Layout>
    </Suspense>
  )
}

export default App
