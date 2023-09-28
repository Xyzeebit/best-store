import flashIcon from '../../assets/icons/flash-on.svg'
import clothes from '../../assets/clothes.jpg';
import hair from '../../assets/hair_women.webp';
import mensShirt from '../../assets/mens-shirt.webp';
// import PropTypes from 'prop-types';
import { useEffect, useState } from "react"
import FlashSalesItem from './FlashSalesItem';

const timer = {
  hours: 1,
  minutes: 2
};
const flashSales = [
  {
    id: "KJIIi9ksjo",
    image: clothes,
    text: "Babies wear (Clothes, shoe, cloves and hoods)",
    price: "130.45",
  },
  {
    id: "KJIIi9k0sjo",
    image: hair,
    text: "Colored attachment hair for women",
    price: "130.45",
  },
  {
    id: "KJIIi9ksjo2",
    image: mensShirt,
    text: "Shirt for out activities",
    price: "130.45",
    rating: 3.5,
  },
  {
    id: "KJIIi39ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
    rating: 2.5,
  },
  {
    id: "KJI4Ii9ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
    rating: 5,
  },
  {
    id: "KJIIi59ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
    rating: 2.26,
  },
  {
    id: "KJ6IIi9ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
    rating: 5,
  },
  {
    id: "KJIIi97ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
    rating: 4.5,
  },
  {
    id: "KJIIi9k8sjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
    rating: 3.5,
  },
];


const FlashSales = () => {
  const [timeout, setTimeout] = useState(false);
  const [hh, setHH] = useState(timer.hours);
  const [mm, setMM] = useState(timer.minutes);
  const [ss, setSS] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ss === 0 && mm === 0 && hh === 0) {
        clearInterval(interval);
        setTimeout(true);
      } else {
        if (ss === 0) {
          setSS(59);
          if (mm === 0) {
            if (hh === 0) {
              // setHH(0);
            } else {
              setMM(59);
              setHH(hh - 1);
            }
          } else {
            setMM(mm - 1);
          }
        } else {
          setSS(ss - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [hh, mm, ss]);
  
  if (timeout) {
    return (<></>)
  }

  return (
    <div className="px-4 md:px-16 mb-12 mt-4">
      <div className="font-bold text-xl text-green-900 pb-8 inline-flex items-center justify-center">
        <img src={flashIcon} alt='flash sales' width={30} height={30} />
        <div>Flash Sales {`${hh > 9 ? hh : '0' + hh}:${mm > 9 ? mm : '0' + mm}:${ss > 9 ? ss : '0' + ss}`}</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {flashSales.map(item => (
          <FlashSalesItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}


export default FlashSales;