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
          className="flex justify-end mt-2 pr-4 pl-4 md:pl-0 md:pr-16"
          onClick={handleClick}
        >
          <div
            className={` h-56 max-h-64 w-full md:w-2/4 bg-white px-1 py-1 shadow-lg rounded overflow-auto`}
          >
            {list.map(({ id, title, image }) => {
              return (
                <SearchItem key={id} id={id} title={title} image={image} />
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
