import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousal {...settings}>
      <Wrap>
        <img src="/image/slider-badging.jpg" alt="slide" />
      </Wrap>
      <Wrap>
        <img src="/image/slider-badging.jpg" alt="slide" />
      </Wrap>
      <Wrap>
        <img src="/image/slider-badag.jpg" alt="slide" />
      </Wrap>
    </Carousal>
  );
};

export default ImageSlider;
const Carousal = styled(Slider)`
  margin-top: 20px;
  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgba(150, 158, 171);
    }
  }
  li.slick-active button::before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
cursor:pointer;
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration:300ms;
      &:hover{
          border: 4px solid rgba(249, 249, 249, 0.8);
  }
}
`;
