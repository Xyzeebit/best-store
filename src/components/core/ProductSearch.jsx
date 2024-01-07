import { useEffect, useRef, useState } from "react";
import searchIcon from "../../assets/icon-search.svg";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct, updateSearchList } from "../../redux/collectionsSlice";
import { findItemsWithText } from '../../api/collections-api';

const ProductSearch = () => {
  const { data } = useSelector(state => state.collections);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [wh, setWh] = useState("wh-18");
  const [bg, setBg] = useState("bg-gray-200");
  const [expandInput, setExpandInput] = useState(false);
  const collapse = "ws";
  const inputRef = useRef(null);

  const handleValueChange = ({ target }) => {
    setValue(target.value);
  };
  const handleExpandInput = () => {
    setExpandInput(true);
    inputRef.current.focus();
  };
  const handleFocused = () => {
    setWh("wh-25");
    setBg("bg-gray-100");
  };
  const handleBlurred = () => {
    setWh("wh-18");
    setBg("bg-gray-200");
    if (value.trim().length < 1) {
      setExpandInput(false);
    }
    dispatch(searchProduct({ text: "" }));
  };
  const handleProductSearch = (evt) => {
    evt.preventDefault();
    dispatch(searchProduct({ text: value }));
  };

  useEffect(() => {
    if (value.length > 2) {
      dispatch(searchProduct({ text: value }));
	  const list = findItemsWithText(data, value.toLowerCase().trim());
	  dispatch(updateSearchList(list));
    }
	if (value.trim().length < 1) {
      dispatch(searchProduct({ text: "" }));
    }
    
  }, [dispatch, value]);

  return (
    <form
      onSubmit={handleProductSearch}
      className={`flex items-center justify-center ${bg} px-4 py-1 text-green-900 rounded-3xl transition-all overflow-hidden`}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Search collections"
        onChange={handleValueChange}
        onFocus={handleFocused}
        onBlur={handleBlurred}
        className={`${
          expandInput ? wh : collapse
        } ${wh} input-transform bg-transparent outline-none placeholder-gray-400`}
      />
      <img
        src={searchIcon}
        alt=""
        width={15}
        height={15}
        onClick={handleExpandInput}
      />
    </form>
  );
};

export default ProductSearch;
