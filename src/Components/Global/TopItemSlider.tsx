import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TopItemCard from "./TopItemCard";

const TopItemSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
    //   pagination={{ clickable: true }}
      style={{ width: "97vw" }}
      loop={true}
      breakpoints= {{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView:1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
    >
      <SwiperSlide style={{ width: "25%" }}>
        <TopItemCard />
      </SwiperSlide>
      <SwiperSlide style={{ width: "25%" }}>
        <TopItemCard />
      </SwiperSlide>
      <SwiperSlide style={{ width: "25%" }}>
        <TopItemCard />
      </SwiperSlide>
      <SwiperSlide style={{ width: "25%" }}>
        <TopItemCard />
      </SwiperSlide>
      <SwiperSlide style={{ width: "25%" }}>
        <TopItemCard />
      </SwiperSlide>
      <SwiperSlide style={{ width: "25%" }}>
        <TopItemCard />
      </SwiperSlide>
    </Swiper>
  );
};
export default TopItemSlider;
