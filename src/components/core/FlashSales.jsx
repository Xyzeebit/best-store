import flashIcon from '../../assets/icons/flash-on.svg'
import clothes from '../../assets/clothes.jpg';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react"
import FlashSalesItem from './FlashSalesItem';

const flashSales = [
  {
    id: "KJIIi9ksjo",
    image: clothes,
    text: "Babies wear Babies wear Babies wear",
    price: "130.45",
  },
  {
    id: "KJIIi9k0sjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
  },
  {
    id: "KJIIi9ksjo2",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
  },
  {
    id: "KJIIi39ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
  },
  {
    id: "KJI4Ii9ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
  },
  {
    id: "KJIIi59ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
  },
  {
    id: "KJ6IIi9ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
  },
  {
    id: "KJIIi97ksjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
  },
  {
    id: "KJIIi9k8sjo",
    image: clothes,
    text: "Babies wear",
    price: "130.45",
  },
];

const FlashSales = ({ timer }) => {
    const [hh, setHH] = useState(timer.hours);
    const [mm, setMM] = useState(timer.minutes);
    const [ss, setSS] = useState(59);

    useEffect(() => {
        const interval = setInterval(() => {
            if (ss === 0 && mm === 0 && hh === 0) {
                clearInterval(interval);
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

    return (
        <div className="col-span-3 md:col-span-1 rounded-lg">
            <div className="font-bold text-xl text-green-900 pb-4 inline-flex items-center justify-center">
                <img src={flashIcon} alt='flash sales' width={30} height={30} />
                <div>Flash Sales {`${hh > 9 ? hh : '0'+hh}:${mm > 9 ? mm : '0'+mm}:${ss > 9 ? ss : '0'+ss}`}</div>
          </div>
          <div className="grid grid-cols-9 md:grid-cols-3 gap-2">
                {flashSales.map(item => (
                    <FlashSalesItem key={item.id} {...item} />
            ))}
          </div>
        </div>
    );
}

FlashSales.propTypes = {
    timer: PropTypes.object
}

export default FlashSales;