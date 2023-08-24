import PropTypes from 'prop-types';
import SearchItem from "./SearchItem";

const SearchList = ({ list }) => {
   
    return (
        <div>
            {list.map(({ id, title, image, price }) => {
                return (
                    <SearchItem key={id} title={title} image={image} price={price} />
                )
            })}
        </div>
    );
}

SearchList.propTypes = {
    list: PropTypes.array
}

export default SearchList;