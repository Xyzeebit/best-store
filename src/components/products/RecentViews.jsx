import ProductCard from '../core/ProductCard';
import { useEffect, useState } from 'react';
import { getRecentViews } from '../../api/apis';
import PropTypes from 'prop-types'

const RecentViews = ({ id }) => {
    const [items, setItems] = useState([]); 
    
    useEffect(() => {
        const data = getRecentViews().filter(it => it.id !== id);
        setItems(data);
    }, [id]);

    if (items.length < 1) {
        return null;
    }

    return (
        <div className="px-4 md:px-16 pt-8 pb-16">
            <h2 className='font-bold text-green-900 pt-4 pb-4 text-xl'>Recently viewed</h2>
            <div className='flex justify-start items-center gap-4 md:gap-6 pb-8 overflow-auto top-pro'>
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.images[0]}
                        prices={item.prices}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    );
}

RecentViews.propTypes = {
    id: PropTypes.string.isRequired,
}

export default RecentViews;