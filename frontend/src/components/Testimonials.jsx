import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import '../styles/testimonials.css';

import { data } from './data';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTopRatedProducts } from '../actions/productActions';

SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { error, loading, products } = productTopRated;

  useEffect(() => {
    dispatch(getTopRatedProducts());
  }, [dispatch]);
  return (
    <section id="testimonials" className="main-testimonials-wrapper">
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 6,
            slideShadows: true,
          }}
          // pagination={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
