import React, {Suspense, useEffect} from "react";
import {useAppDispatch} from "./hooks/reduxHooks";
import Layout from "./components/layout/Layout";
import {Route, Routes} from "react-router-dom";
import {fetchCategories} from "./store/categories/categories-thunk";
import Spinner from "./components/UI/Spinner";
import useScrollToTop from "./hooks/useScrollToTop";

const Home = React.lazy(() => import("./pages/Home"));
const Shop = React.lazy(() => import("./pages/Shop"));
const Checkout = React.lazy(() => import("./pages/Checkout"));


function App() {
  const dispatch = useAppDispatch();
  useScrollToTop();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Suspense fallback={<Spinner/>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="shop/:category" element={<Shop/>}/>
          <Route path="checkout" element={<Checkout/>}/>
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
