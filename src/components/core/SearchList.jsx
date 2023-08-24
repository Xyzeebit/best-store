import PropTypes from 'prop-types';
import SearchItem from "./SearchItem";
import icon from '../../assets/smartphone.png';

const SearchList = () => {
    const list = [
      {
        id: "jainba6b9jxhbya",
        title: "Samsung ultra s20 6gb ram 124gb rom",
        image: icon,
      },
      {
        id: "jainb6b9njxhbya",
        title: "Samsung ultra s20 6gb ram 124gb rom",
        image: icon,
      },
      {
        id: "jainb6b9jxhbMya",
        title: "Samsung ultra s20 6gb ram 124gb rom",
        image: icon,
      },
      {
        id: "jainb6b9jxhboya",
        title: "Samsung ultra s20 6gb ram 124gb rom",
        image: icon,
      },
      {
        id: "jainb6b9jxhbYoya",
        title: "Samsung ultra s20 6gb ram 124gb rom",
        image: icon,
      },
      {
        id: "jainVb6b9jxhboya",
        title: "Samsung ultra s20 6gb ram 124gb rom",
        image: icon,
      },
    ];
   
    return (
      <div className='flex justify-end mt-4 pr-4 pl-4 md:pl-0 md:pr-16'>
        <div className={` h-56 max-h-64 w-full md:w-2/4 px-1 shadow-md rounded overflow-auto`}>
          {list.map(({ id, title, image }) => {
            return (
              <SearchItem key={id} id={id} title={title} image={image} />
            );
          })}
        </div>
      </div>
    );
}

SearchList.propTypes = {
    list: PropTypes.array
}

export default SearchList;