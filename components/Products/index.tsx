
"use client";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "@/components//Products/SingleProduct";
import productsData from "@/components/Products/productsData";


export default function Products() {
  return (
    <section
        id="features"
        className="bg-[green]/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Sản phẩm"
            paragraph=""
            center
          />
          <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={true}
      >
        {productsData.map((item, index) => (
            <SwiperSlide key={index} >
              <SingleProduct key={item.id} product={item} />
            </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </section>
  );
}
