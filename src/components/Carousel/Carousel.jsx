import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };
  return (
    <div className="slider-container mt-3 carousel-container">
      <Slider {...settings}>
        <div className="d-flex justify-content-center">
          <img src="https://images.fravega.com/f300/e0b3831ca9b0f0f6b8de295da19cf829.png.webp" />
        </div>
        <div className="d-flex justify-content-center">
          <img src="https://images.fravega.com/f300/2445be7fbdf830bb1e9fcc3ff58213a8.jpg.webp" />
        </div>
        <div className="d-flex justify-content-center">
          <img src="https://images.fravega.com/f300/a40ed27411d65423c5675e8ce07fabfc.png.webp" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel