import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from './Banners';

register();

const Carousel = ({item}) => {
  const items = useSelector(state => state.carousel[item]);
  
  return (
    <div className="carousel m-4 md:m-16 h-52 md:h-60 lg:h-80 bg-gray-200">
      <swiper-container
        pagination="false"
        speed={400}
        delay={3000}
        autoplay="true"
      >
        {items.map(item => (
          <swiper-slide key={item.id}>
            <Banner to={item.url} image={item.image} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

Carousel.propTypes = {
  item: PropTypes.string.isRequired,
}

export default Carousel;
