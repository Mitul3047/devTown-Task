
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'


const Banner = () => {
    return (
        <div className='lg:mb-[120px]'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={banner3} alt="" />
        </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Banner;