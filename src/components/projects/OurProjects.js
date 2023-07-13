import React from "react";
import easyfert from "../../assets/easyfert.png";
import mend from "../../assets/mend.png";
import food from "../../assets/food.png";
import gym from "../../assets/gym.png";
import healthy from "../../assets/healthy.png";
import horizon from "../../assets/horizon.png";
import juice from "../../assets/juice.png";
import luta from "../../assets/luta.png";
import orli from "../../assets/orli.png";
import plane from "../../assets/plane.png";
import tour from "../../assets/tour.png";
import travel from "../../assets/travel.png";
import OurProjectContainer from "./OurProjects.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const OurProjects = () => {
  return (
    <OurProjectContainer id="projects">
      <h2>Some of Our Work</h2>

      <div className="desktop">
        <Swiper
          className="slides"
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          speed={1200}
        >
          <SwiperSlide className="card">
            <img src={easyfert} />
            <button>
              <a href="https://easyfert.com.br">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={travel} />
            <button>
              <a href="https://eloquent-mandazi-9e6252.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={plane} />
            <button>
              <a href="https://eloquent-mandazi-9e6252.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={mend} />
            <button>
              <a href="https://clever-kataifi-ac2d1f.netlify.app">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={tour} />
            <button>
              <a href="https://legendary-basbousa-550301.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={food} />
            <button>
              <a href="https://rococo-speculoos-3bbb3c.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={gym} />
            <button>
              <a href="https://extraordinary-starship-c0e771.netlify.app/">
                Demo
              </a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={healthy} />
            <button>
              <a href="https://reliable-pika-5f63f5.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={horizon} />
            <button>
              <a href="https://animated-cucurucho-d1c086.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={juice} />
            <button>
              <a href="https://illustrious-twilight-9d0e6d.netlify.app/">
                Demo
              </a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={orli} />
            <button>
              <a href="https://grand-kelpie-b25cf0.netlify.app//">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={luta} />
            <button>
              <a href="https://teixeirafightclub.com.br/">Demo</a>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>



      <div className="mobile">
        <Swiper
          className="slides"
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          speed={1200}
        >
          <SwiperSlide className="card">
            <img src={easyfert} />
            <button>
              <a href="https://easyfert.com.br">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={travel} />
            <button>
              <a href="https://eloquent-mandazi-9e6252.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={plane} />
            <button>
              <a href="https://eloquent-mandazi-9e6252.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={mend} />
            <button>
              <a href="https://clever-kataifi-ac2d1f.netlify.app">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={tour} />
            <button>
              <a href="https://legendary-basbousa-550301.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={food} />
            <button>
              <a href="https://rococo-speculoos-3bbb3c.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={gym} />
            <button>
              <a href="https://extraordinary-starship-c0e771.netlify.app/">
                Demo
              </a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={healthy} />
            <button>
              <a href="https://reliable-pika-5f63f5.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={horizon} />
            <button>
              <a href="https://animated-cucurucho-d1c086.netlify.app/">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={juice} />
            <button>
              <a href="https://illustrious-twilight-9d0e6d.netlify.app/">
                Demo
              </a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={orli} />
            <button>
              <a href="https://grand-kelpie-b25cf0.netlify.app//">Demo</a>
            </button>
          </SwiperSlide>

          <SwiperSlide className="card">
            <img src={luta} />
            <button>
              <a href="https://teixeirafightclub.com.br/">Demo</a>
            </button>
          </SwiperSlide>
        </Swiper>
      </div>



    </OurProjectContainer>
  );
};

export default OurProjects;
