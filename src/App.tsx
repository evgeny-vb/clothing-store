import './App.css'
import React, {Suspense, useEffect} from "react";
import {useAppDispatch} from "./hooks/reduxHooks";
import Layout from "./components/layout/Layout";
import {Route, Routes} from "react-router-dom";
import {fetchCategories} from "./store/categories/categories-thunk";
import Spinner from "./components/spinner";

const Home = React.lazy(() => import("./pages/Home"))
const Shop = React.lazy(() => import("./pages/Shop"))


function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <Suspense fallback={<Spinner/>}>
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
