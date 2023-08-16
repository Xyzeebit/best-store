
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

// import Banner from './Banner';


// const Carousel = () => {
//     return (
//       <>
//         <Swiper
//           direction={"vertical"}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{ delay: 3000 }}
//           speed={500}
//           modules={[Pagination]}
//           className="carousel m-4 md:m-16 h-52 md:h-60 lg:h-80 rounded-lg bg-gray-200"
//         >
//           <SwiperSlide className="">
//             <Banner id="electronics/computers" image={computers} />
//           </SwiperSlide>
//           <SwiperSlide className="bg-green-300 flex items-center justify-center font-bold">
//             Home Appliances
//           </SwiperSlide>
//           <SwiperSlide className="bg-blue-300 flex items-center justify-center font-bold">
//             Clothes
//           </SwiperSlide>
//           <SwiperSlide className="bg-red-300 flex items-center justify-center font-bold">
//             Books
//           </SwiperSlide>
//           <SwiperSlide className="bg-gray-300 flex items-center justify-center font-bold">
//             Cosmetics
//           </SwiperSlide>
//         </Swiper>
//       </>
//     );
// }

import stationery from '../../assets/stationery.jpg'
import clothes from '../../assets/clothes.jpg'
import footwear from '../../assets/footwear.jpg'
import makeup from '../../assets/makeup.jpg'
import appliances from '../../assets/appliances.jpg'

import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/pagination';


import Banner from './Banners';

register();

const Carousel = () => {
  return (
    <div className="carousel m-4 md:m-16 h-52 md:h-60 lg:h-80 rounded-lg bg-gray-200">
      <swiper-container
        pagination="false"
        speed={400}
        delay={3000}
        autoplay="true"
      >
        <swiper-slide>
          <Banner id="/book-and-stationery/stationeries" image={stationery} />
        </swiper-slide>
        <swiper-slide>
          <Banner id="/clothes/kids" image={clothes} />
        </swiper-slide>
        <swiper-slide className="bg-red-500">
          <Banner id="/shoes/footwear" image={footwear} />
        </swiper-slide>
        <swiper-slide>
          <Banner id="/beauty/makeup" image={makeup} />
        </swiper-slide>
        <swiper-slide>
          <Banner id="/electronics/home_appliances" image={appliances} />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default Carousel;
