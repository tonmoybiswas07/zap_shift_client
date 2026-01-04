import React, { use } from "react";
import reviewsImg from "../../../assets/customer-top.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewsCard from "./ReviewsCard";


const Reviews = ({ reviewsData }) => {
  const reviews = use(reviewsData);
  console.log(reviews)
  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <img src={reviewsImg} alt="" />
      </div>
      <div className="text-center my-10">
        <h2 className="text-4xl font-extrabold">
          What our customers are sayings
        </h2>
        <p className="text-sm text-gray-600 my-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>

      <div>
        <Swiper
        loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 0.75,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper  mb-20"
        >
        {
          reviews.map(review => <SwiperSlide key={review.id}>
            <ReviewsCard review={review}></ReviewsCard>
          </SwiperSlide> )
        }
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
