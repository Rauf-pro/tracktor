import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import "swiper/css";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Gallery() {
  return (
    <section className="pt-[100px]  ">
      <div className="container mx-auto">
        <h2 className=" font-lexend-semibold md:text-[120px] text-[40px] md:pb-[65px] pb-[37px] relative top-0 z-20  ">
          Galereya
        </h2>
      </div>
      <div className="w-3/4">{ImageCarousel()}</div>
    </section>
  );
}

function ImageCarousel() {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 1, disableOnInteraction: false }}
      speed={1000}
      breakpoints={{
        // when window width is >= 320px
        320: {
          width: 320,
          slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
          width: 480,
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1024: {
          width: 1024,
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <Image
          src={"/img/gallery-1.png"}
          width={402}
          height={250}
          responsive
          alt=""
          className="object-cover h-[250px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/img/gallery-2.png"}
          width={402}
          height={250}
          responsive
          alt=""
          className="object-cover h-[250px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/img/gallery-3.png"}
          width={402}
          height={250}
          responsive
          alt=""
          className="object-cover h-[250px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/img/gallery-4.png"}
          width={402}
          height={250}
          responsive
          alt=""
          className="object-cover h-[250px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/img/gallery-4.png"}
          width={402}
          height={250}
          responsive
          alt=""
          className="object-cover h-[250px]"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/img/gallery-4.png"}
          width={402}
          height={250}
          responsive
          alt=""
          className="object-cover h-[250px]"
        />
      </SwiperSlide>
    </Swiper>
  );
}
const images = [
  "/img/gallery-1.png",
  "/img/gallery-2.png",
  "/img/gallery-3.png",
  "/img/gallery-4.png",
];
