import Item from "./Item";
import PropTypes from 'prop-types'

const ProductList = ({ data }) => {

  return (
    <div className="py-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 pt-6">
        {data && data.map((item) => <Item key={item.id} {...item} />)}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProductList;
