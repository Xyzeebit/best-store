import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from './Banners';
import HotDeal from './HotDeals';

register();

const Carousel = ({tag, delay, classes}) => {
  const items = useSelector(state => state.carousel[tag]);
  
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
            {tag === 'banners' ? <Banner to={item.url} image={item.image} /> : <HotDeal {...item} />}
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

Carousel.propTypes = {
  tag: PropTypes.string.isRequired,
  delay: PropTypes.number,
  classes: PropTypes.string.isRequired,
};

export default Carousel;
