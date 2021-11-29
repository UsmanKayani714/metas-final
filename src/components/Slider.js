import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// import "./Slider.css";
import slid01 from "../assets/001.png";
import slid02 from "../assets/02.png";
import slid03 from "../assets/03.png";
import slid04 from "../assets/04.png";
import slid05 from "../assets/05.png";
import slid06 from "../assets/06.png";
import slid07 from "../assets/07.png";

const Slider = (props) => {
  SwiperCore.use([Autoplay]);
  let direction = props.reverse;
  return (
    <>
      <section className="slider-section container">
        <div className="hidebelow no-gutters">
          <div className="row blog no-gutters">
            <div className="col-md-12 no-gutters">
              {/* <!-- Slider main container --> */}

              <Swiper
                spaceBetween={40}
                slidesPerView={3}
                // speed={1900}
                loop={true}
                freeMode={true}
                speed={2000}
                shortSwipes={false}
                longSwipes={false}
                autoplay={{
                  reverseDirection: direction,
                  delay: 0,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: false }}
                scrollbar={{ draggable: true, hide: true, el: "" }}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    width: 640,
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid01} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid02} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid03} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid04} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid05} className="img-fluid" alt="..." />
                </SwiperSlide>

                <SwiperSlide>
                  {" "}
                  <img src={slid06} className="img-fluid" alt="..." />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src={slid07} className="img-fluid" alt="..." />
                </SwiperSlide>
              </Swiper>
              {/* <!--.Carousel--> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
