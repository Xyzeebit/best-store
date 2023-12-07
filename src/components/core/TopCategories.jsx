import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';
import TopProductsList from './TopProductsList';
import { fetchTopCategories } from '../../api/top-categories';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTopCategories } from '../../redux/topcatSlice';
import allProductsImage from '../../assets/icons/menu-icon.svg'

const TopCategories = () => {
  const [noData, setNoData] = useState(true);
  const { data } = useSelector(state => state.topCategories);
  const dispatch = useDispatch();

  async function getData() {
      const resp = await fetchTopCategories(true);
      dispatch(updateTopCategories(resp));
      setNoData(false);
    }
    if (noData) {
      getData();
    }

  // useEffect(() => {
  //   async function getData() {
  //     const resp = await fetchTopCategories(true);
  //     dispatch(updateTopCategories(resp));
  //     setNoData(false);
  //   }
  //   if (noData) {
  //     getData();
  //   }
  // }, [dispatch, noData]);

    return (
      <TopProductsList title={"Shop Now From Our Top Collections"}>
        {data && data.map((cat) => (
          <Link key={cat.id} to={"/" + cat.category}>
            <CategoryItem
              text={cat.title}
              image={cat.image}
              category={cat.category}
            />
          </Link>
        ))}
        <Link
          to="/products"
          className="flex flex-col items-center justify-center w-48 h-48 gap-2 bg-gray-200 rounded-full h-rotate-45"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <img
              src={allProductsImage}
              alt="all products"
              width={45}
              height={45}
            />
          </div>
          <div className="w-48 font-bold text-center text-green-900">All Categories</div>
        </Link>
      </TopProductsList>
    );
  }

export default TopCategories;