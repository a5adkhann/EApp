import React from "react";
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css'

const flickityOptions = {
    initialIndex: 1
}

const Slider = () => {
  return (
    <>
      <Flickity
        className={"carousel"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img src="./slider.jpg" />
      </Flickity>
    </>
  );
};

export default Slider;
