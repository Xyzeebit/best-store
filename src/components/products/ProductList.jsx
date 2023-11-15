import { Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { fetchProducts } from "../../api/top-categories";
import { fetchCategories } from "../../redux/categoriesSlice";

const ProductList = ({ category }) => {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.categories);

    useEffect(() => {
        const path = category.toLowerCase();
        async function getData() {
            const resp = await fetchProducts(true, path);
            dispatch(fetchCategories(resp));
        }
        getData();
    }, [dispatch, category]);
    
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <div className="py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 pt-6">
            {data && data.map((item) =>
                <Item key={item.id} {...item} />
            )}
            </div>
        </div>
      </Suspense>
    );
}

ProductList.propTypes = {
    category: PropTypes.string.isRequired,
}

export default ProductList;