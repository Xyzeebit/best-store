import PropTypes from 'prop-types'
import Header from './Header';
import Footer from './Footer';
import { fetchCollections } from "../../redux/collectionsSlice";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllCollections } from '../../api/apis';

const Layout = ({ renderHeader, children }) => {
 const [noData, setNoData] = useState(true);
  const dispatch = useDispatch();

  async function getData() {
    const collections = await fetchAllCollections();
    dispatch(fetchCollections(collections));
    setNoData(false);
  }
  if (noData) {
    getData();
  }

    return (
        <div className="md:bg-gray-50">
            {renderHeader && <Header />}
            {children}
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    renderHeader: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Layout;