import { useRef, useState } from 'react';
import searchIcon from '../../assets/icon-search.svg';

const ProductSearch = () => {
    const [value, setValue] = useState('');
    const [wh, setWh] = useState('wh-18');
    const [bg, setBg] = useState("bg-gray-200");
    const [expandInput, setExpandInput] = useState(false);
    const collapse = 'ws';
    const inputRef = useRef(null);

    const handleValueChange = ({ target }) => {
        setValue(target.value);
    }
    const handleExpandInput = () => {
        setExpandInput(true);
        inputRef.current.focus();
    }
    const handleFocused = () => {
        setWh('wh-25');
        setBg("bg-gray-100");
    }
    const handleBlurred = () => {
        setWh("wh-18");
        setBg("bg-gray-200");
        if (value.trim().length < 1) {
            setExpandInput(false);
        }
    }
    const handleProductSearch = (evt) => {
        evt.preventDefault();
    }
    return (
        <form
            onSubmit={handleProductSearch}
            className={`flex items-center justify-center ${bg} px-4 py-1 text-green-900 rounded-3xl transition-all overflow-hidden`}
        >
            <input
                ref={inputRef}
                type="text"
                value={value}
                placeholder="Product search"
                onChange={handleValueChange}
                onFocus={handleFocused}
                onBlur={handleBlurred}
                className={`${expandInput ? wh : collapse} input-transform bg-transparent outline-none placeholder-gray-400`}
            />
            <img src={searchIcon} alt="" width={15} height={15} onClick={handleExpandInput} />
        </form>
    );
}

export default ProductSearch;