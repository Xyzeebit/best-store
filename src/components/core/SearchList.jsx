import PropTypes from "prop-types";
import SearchItem from "./SearchItem";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../redux/collectionsSlice";

const SearchList = () => {
  const { searching, list } = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(searchProduct({ text: "" }));
  };

  return (
    <>
      {searching && (
        <div
          className="mt-2 pr-4 pl-4 md:pl-0 md:pr-16 relative z-30"
          
        >
          <div
            className={`absolute top-0 right-0 md:right-10 h-56 max-h-64 w-full md:w-2/4 bg-white px-1 py-1 shadow-lg rounded overflow-auto z-50`}
          >
            {list && list.map(({ id, title, images }) => {
              return (
                <SearchItem key={id} id={id} title={title} image={images[0]} />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

SearchList.propTypes = {
  list: PropTypes.array,
};

export default SearchList;