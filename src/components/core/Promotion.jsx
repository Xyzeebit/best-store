import cashbackImage from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Promotion = () => (
    <div className="mx-4 md:mx-16 my-16 bg-green-100 rounded-md py-8 flex flex-col-reverse md:flex-row items-center justify-around">
        <div className="flex flex-col items-center md:items-start justify-center">
            <div className='font-bold text-3xl md:text-5xl text-gray-800 pb-10'>Get 5% Cash Back</div>
            <Link to={'/promotions/cashback'} className="font-bold text-white bg-green-900 rounded-3xl px-8 py-[0.8rem] shadow-sm hover:bg-red-500">Learn more</Link>
        </div>
        <div>
            <img src={cashbackImage} alt='promotions' width={200} height={200} />
        </div>
    </div>
);

export default Promotion;