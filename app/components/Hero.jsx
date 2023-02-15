'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import styles from '../page.module.css';
import 'swiper/css';

const Hero = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide className={styles.swiperSlide}>
          Reparación y mantenimiento de sistemas hidráulicos
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Reparación y mantenimiento de motores electricos
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Reparación y mantenimiento de motores para puertas batientes y
          corredizas
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Diseño, reparación e instalación de tableros de control eléctricos
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Cerramiento eléctrico perimetral
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          Desarrollo de paginas web
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
