
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Carousel = () => {
    return (
      <>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 1000 }}
          speed={400}
          modules={[Pagination]}
          className="carousel m-4 md:m-16 h-52 md:h-80 rounded-lg bg-gray-200"
        >
          <SwiperSlide className="bg-yellow-300 flex items-center justify-center font-bold">
            Computers
          </SwiperSlide>
          <SwiperSlide className="bg-green-300 flex items-center justify-center font-bold">
            Home Appliances
          </SwiperSlide>
          <SwiperSlide className="bg-blue-300 flex items-center justify-center font-bold">
            Clothes
          </SwiperSlide>
          <SwiperSlide className="bg-red-300 flex items-center justify-center font-bold">
            Books
          </SwiperSlide>
          <SwiperSlide className="bg-gray-300 flex items-center justify-center font-bold">
            Cosmetics
          </SwiperSlide>
        </Swiper>
      </>
    );
}

export default Carousel;
