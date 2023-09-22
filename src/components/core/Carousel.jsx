import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from './Banners';

register();

const Carousel = ({item, delay, classes}) => {
  const items = useSelector(state => state.carousel[item]);
  
  return (
    <div className={"carousel " +  classes}>
      <swiper-container
        pagination="false"
        speed={400}
        delay={delay ?? 3000}
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
  delay: PropTypes.number,
  classes: PropTypes.string.isRequired,
};

export default Carousel;
