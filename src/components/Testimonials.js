import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";
import {  useSelector } from "react-redux";

const Testimonials = () => {
  const data=useSelector((state)=>state.data.data?.user?.testimonials)
  const filterData= data?.filter((value)=>value.enabled===true)

  useEffect(() => {

    dataImage();
    imgToSVG();
  }, [data]);

  return (
    <div className="devman_tm_section">

     {filterData && filterData.length > 0 && ( 

      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
                {
                filterData.map((item,index)=>(
              <SwiperSlide key={index}>

                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                  {item?.review}
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url={item?.image?.url}
                      />
                    </div>
                    <div className="short"> 
                      <h3>{item?.name}</h3>
                      <span>{item?.position}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                                  ))

                }
              
             
              <div className="owl-dots"></div>
            </Swiper>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
              )}
    </div>
  );
};
export default Testimonials;
