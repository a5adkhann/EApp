import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductSlider = () => {

  const [allProducts, setAllProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8005/products");
            const result = await response.json();
            setAllProducts(result.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      fetchData();
    })
    
  return (
    <>
      <div className="container py-10 mx-auto products_slider">
        <div className="flex flex-wrap items-center justify-between mb-2 product_deal">
          <p className="text-2xl font-bold uppercase">Deal of the day</p>
          <p className="text-[#333] hover:text-[#096EC0] transition-colors duration-300 ease-in-out cursor-pointer"><CalendarMonthIcon /> December 2024</p>
        </div>
        
        <Divider/>

        <Carousel
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={true}
          showDots={false}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {allProducts.map((product) => {
            return (
              <div className="mt-8 cursor-pointer" key={product.id}>
                <div className="img-container">
                  <img
                    className="w-[200px] hover:scale-95 transition-all duration-500 ease-in sm:w-full container mx-auto"
                    src={product.productImg}
                    alt=""
                  />
                </div>
                <div className="text-container p-2 text-[#333]">
                  <p className="font-semibold product-name">
                    {product.productName}
                  </p>
                  <p className="product-price">
                    {product.productPrice}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ProductSlider;
