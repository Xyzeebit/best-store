import PropTypes from 'prop-types'
import Header from './Header';
import Footer from './Footer';
import { fetchCollections } from "../../redux/collectionsSlice";
import { useState, useEffect, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllCollections } from '../../api/apis';

const Layout = ({ renderHeader, children }) => {
 const [noData, setNoData] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const collections = await fetchAllCollections();
      dispatch(fetchCollections(collections));
      setNoData(false);
    }
    if (noData) {
      getData();
    }
  }, [dispatch, noData]);

    return (
      <Suspense fallback={<p>Loading...</p>}>
        <div className="md:bg-gray-50">
          {renderHeader && <Header />}
          {children}
          <Footer />
        </div>
      </Suspense>
    );
}

Layout.propTypes = {
    renderHeader: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Layout;