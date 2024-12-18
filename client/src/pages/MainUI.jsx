import React from "react";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import ProductSlider from "../components/ProductSlider";

const MainUI = () => {
  return (
    <>
      <Slider />
      <Categories />
      <ProductSlider />
      <Products />
    </>
  );
};

export default MainUI;
