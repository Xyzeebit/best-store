import flashIcon from '../../assets/icons/flash-on.svg'

import { useEffect, useState } from "react"

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
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, [hh, mm, ss]);

    return (
        <div className="col-span-3 md:col-span-1 rounded-lg">
            <div className="font-bold text-xl text-green-900 pb-4 inline-flex items-center justify-center">
                <img src={flashIcon} alt='flash sales' width={25} height={30} />
                <div>Flash Sales {`${hh > 9 ? hh : '0'+hh}:${mm > 9 ? mm : '0'+mm}:${ss > 9 ? ss : '0'+ss}`}</div>
          </div>
          <div className="grid grid-cols-9 md:grid-cols-3 gap-2">
            <div className="col-span-3 md:col-span-1 h-24 bg-red-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-yellow-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-green-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-blue-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-pink-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-gray-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-slate-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-orange-500 rounded-lg"></div>
            <div className="col-span-3 md:col-span-1 h-24 bg-red-500 rounded-lg"></div>
          </div>
        </div>
    );
}

export default FlashSales;