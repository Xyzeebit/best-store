import Item from "./Item";
import PropTypes from 'prop-types'

const ProductList = ({ data }) => {
	console.log("items", data)
  return (
    <div className="py-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 pt-6">
        {data && data.map((item) => {
          let rating = item.ratings.reduce((prev, curr) => {
            return prev + curr;
          }, 0);
          rating /= item.ratings.length;
          return <Item key={item.id} {...item} image={item.images[0]} quantityLeft={item.stock_quantity} category="collections" ratings={rating} />;
        })}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ProductList;
