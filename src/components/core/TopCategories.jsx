import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';
import TopProductsList from './TopProductsList';
import { fetchTopCategories } from '../../api/top-categories';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TopCategories = () => {
  const [noData, setNoData] = useState(true);
  const { topCategories } = useSelector(state => state.topCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const resp = await fetchTopCategories(true);
      dispatch(resp);
      setNoData(false);
    }
    if (noData) {
      getData();
    }
  }, [dispatch, noData])
  
  return (
      <TopProductsList title={"Shop Now From Our Top Categories"}>
        {topCategories.map((cat) => (
            <Link key={cat.id} to={'/' + cat.category}>
              <CategoryItem
                text={cat.title}
                image={cat.image}
                category={cat.category}
              />
            </Link>
          ))}
      </TopProductsList>
    );
}

export default TopCategories;