import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import PropTypes from 'prop-types'
import { useEffect, useRef } from "react";

register();

const ViewItem = ({ images }) => {
    const swiperEl = useRef(null);

    const handleClick = () => {
        swiperEl.current.swiper.slideNext();
    }

    const handleProgress = evt => {
        const [swiper, progress] = evt.detail;
        console.log(swiper, progress)
    }
    const handleChange = () => {
        console.log('slide changed')
    }

    useEffect(() => {
        swiperEl.current.addEventListener('swiperprogress', handleProgress);
        swiperEl.current.addEventListener('swiperslidechange', handleChange)
        // console.log(swiperEl.current.progress)

        return () => {
            removeEventListener('swiperprogess', handleProgress);
            removeEventListener("swiperslidechange", handleChange);
        }
    }, [])

    return (
        <div className="overflow-hidden">
            <swiper-container ref={swiperEl}>
                {images.map((image, i) => (
                    <swiper-slide key={i}>
                        <div className="bg-grey-100 overflow-hidden rounded-sm">
                            <img src={image} alt="" width={200} height={150} className="p-4 w-full rounded" />
                        </div>
                    </swiper-slide>
                ))}
            </swiper-container>
            <div className="flex justify-center items-center gap-4 flex-wrap pb-6">
                {images.map((image, i) => (
                    <ImageButton key={i} image={image} onClick={handleClick} />
                ))}
            </div>
        </div>
    );
}

const ImageButton = ({ image, onClick }) => (
    <button className="rounded overflow-hidden" onClick={onClick}>
        <img src={image} alt="next" width={80} height={80} />
    </button>
)

ViewItem.propTypes = {
    images: PropTypes.array,
}

ImageButton.propTypes = {
    image: PropTypes.string,
    onClick: PropTypes.func,
};

export default ViewItem;
