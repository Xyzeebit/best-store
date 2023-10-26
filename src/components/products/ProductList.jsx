import { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom'
// import Item from "./Item";
import { fetchProducts } from "../../api/top-categories";
import { fetchCategories } from "../../redux/categoriesSlice";
import Item from "./Item";

const ProductList = () => {
    const [pathname, setPathname] = useState('random');
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.categories);
    const location = useLocation();

    const getLocation = path => {
        path = path.split('/');
        const len = path.length;
        path = path[len - 1];
        if (path === "products") {
            return "random"
        } else {
            return path;
        }
    }

    useEffect(() => {
        setPathname(getLocation(location.pathname));
    }, [location]);

    useEffect(() => {
        async function getData() {
            const resp = await fetchProducts(true, pathname);
            dispatch(fetchCategories(resp));
        }
        if (data) {
            // do nothing
        } else {
            getData();

        }
    }, [data, dispatch, pathname]);
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

export default ProductList;