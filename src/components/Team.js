import React from "react";
import "./Team.css";
import meet from "../assets/meet.webp";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// import "./Slider.css";
import slid01 from "../assets/001.png";
import slid02 from "../assets/02.png";
import slid03 from "../assets/06.png";
import slid04 from "../assets/04.png";
import slid05 from "../assets/07.png";

const Team = () => {
  // SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="container-fluid light-pink">
        <div className="container py-5">
          <h1 className="text-center">
            <img src={meet} alt="" className="img-fluid" />
          </h1>
          <h4 className="px-md-5 text-center">
            The team behind Naked Metas - You could say we are a crazy bunch
            that loves spending all their money on projects, businesses, and
            side hustles. Networking and learning throughout the many years of
            experience. The team started their creative journey trying to build
            apps at a young age and from there went on to become board game
            creators, started up a clothing line (Good news for a Naked Metas
            Merch line), and became hooked on cryptocurrencies. A common
            discussion of ours was about the possibilities for what the
            Metaverse could offer…but instead of just talking about it, we got
            in touch with our alien friends for some inspiration and created the
            Naked Metas. A species of non-binary, naked with powers, chubby but
            still cute metamorph beings. We know it’s a little out there and
            unique compared to the standard NFTs on today's market, but these
            little things are made to tackle the evolving Metaverse head-on. We
            welcome you all to jump on our Discord and get involved with our
            community.
          </h4>
        </div>
        <div className="container">
          <section className="slider-section container text-white">
            <div className="hidebelow no-gutters">
              <div className="row blog no-gutters">
                <div className="col-md-12 no-gutters color-purple">
                  {/* <!-- Slider main container --> */}

                  <Swiper
                    spaceBetween={40}
                    slidesPerView={1}
                    // speed={1900}
                    loop={false}
                    freeMode={true}
                    speed={2000}
                    shortSwipes={false}
                    longSwipes={false}
                    // autoplay={{
                    //   reverseDirection: false,
                    //   delay: 0,
                    //   disableOnInteraction: false,
                    // }}
                    pagination={{ clickable: false }}
                    scrollbar={{ draggable: true, hide: true, el: "" }}
                    breakpoints={{
                      // when window width is >= 640px
                      640: {
                        width: 640,
                        slidesPerView: 2,
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
                      <div className="text-center bg-dark text-uppercase py-2">
                        <h5>Cap'n Sealegs</h5>
                        <p>Director</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src={slid02} className="img-fluid" alt="..." />
                      <div className="text-center bg-dark text-uppercase py-2">
                        <h5>Pigeon Milk</h5>
                        <p>Lead NFT Artist</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src={slid03} className="img-fluid" alt="..." />
                      <div className="text-center bg-dark text-uppercase py-2 ">
                        <h5>Professor</h5>
                        <p>Chief Engineer</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src={slid04} className="img-fluid" alt="..." />
                      <div className="text-center bg-dark text-uppercase py-2">
                        <h5>Dr.Dev</h5>
                        <p>Blockchain Dev</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img src={slid05} className="img-fluid" alt="..." />
                      <div className="text-center bg-dark text-uppercase py-2">
                        <h5>Mr.Wah</h5>
                        <p>Artist</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  {/* <!--.Carousel--> */}
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
      </div>
    </>
  );
};

export default Team;
