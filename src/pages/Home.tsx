import React, {Fragment} from "react";
import Hero from "../components/Hero";
import CategoriesPreview from "../components/categories/CategoriesPreview";

const Home = () => {
  return (
    <Fragment>
      <Hero/>
      <div className="pt-8 px-10 max-w-screen-2xl mx-auto">
        <CategoriesPreview/>
      </div>
    </Fragment>
  );
};

export default Home;