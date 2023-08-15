import { useState } from 'react';
import searchIcon from '../../assets/icon-search.svg';

const ProductSearch = () => {
    const [value, setValue] = useState('');
    const [wh, setWh] = useState('wh-18');
    const [bg, setBg] = useState("bg-gray-200");

    const handleValueChange = ({ target }) => {
        setValue(target.value);
    }
    const handleFocused = () => {
        setWh('wh-25');
        setBg("bg-gray-100");
    }
    const handleBlurred = () => {
        setWh("wh-18");
        setBg("bg-gray-200");
    }
    const handleProductSearch = (evt) => {
        evt.preventDefault();
    }
    return (
        <form
            onSubmit={handleProductSearch}
            className={`flex items-center justify-center ${bg} px-4 rounded-3xl transition-all overflow-hidden`}
        >
            <input
                type="text"
                value={value}
                placeholder="Product search"
                onChange={handleValueChange}
                onFocus={handleFocused}
                onBlur={handleBlurred}
                className={`input-transform bg-transparent outline-none ${wh} placeholder-gray-400`}
            />
            <img src={searchIcon} alt="" width={15} height={15} />
        </form>
    );
}

export default ProductSearch;