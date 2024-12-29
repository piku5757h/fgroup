import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../public/list.json";
import Cards from "../components/Cards";

function FreeBook() {
  const filterData = List.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-3">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free offred Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
            dolorem sapiente minus distinctio provident fugit corporis iusto
            harum consequuntur quis, totam quo amet. Illum quam quo quidem qui
            sequi?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
