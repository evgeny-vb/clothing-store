import React, {Fragment} from "react";
import Hero from "../components/Hero";
import CategoriesPreview from "../components/categories/CategoriesPreview";

const Home = () => {
  return (
    <Fragment>
      <Hero/>
      <CategoriesPreview/>
    </Fragment>
  );
};

export default Home;