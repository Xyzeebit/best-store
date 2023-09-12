import cashbackImage from '../../assets/logo.png'

const Promotion = () => (
    <div className="mx-4 md:mx-16 my-16 bg-green-100 rounded-md py-8 flex flex-col md:flex-row items-center justify-around">
        <div>
            <div className='font-bold text-5xl text-gray-800 pb-8'>Get 5% Cash Back</div>
            <button className='font-bold text-white bg-green-900 rounded-3xl px-8 py-3 shadow-sm hover:bg-red-500'>Learn more</button>
        </div>
        <div>
            <img src={cashbackImage} alt='promotions' width={200} height={200} />
        </div>
    </div>
);

export default Promotion;