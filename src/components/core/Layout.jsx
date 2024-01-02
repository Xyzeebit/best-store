import PropTypes from 'prop-types'
import Header from './Header';
import Footer from './Footer';
import { fetchCollections } from "../../redux/collectionsSlice";
import { useState, useEffect, Suspense, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from "../../redux/userSlice";
import { authChange, getCollections } from '../../api/apis';

const Layout = ({ renderHeader, children }) => {
  const [noData, setNoData] = useState(true);
  const [session, setSession] = useState(null);
  const dispatch = useDispatch();

  const user = useMemo(() => {
    if (session) {
      const user = { isLoggedIn: true, ...session.user };
      return user;
    }
  }, [session]);

  useEffect(() => {
    if (user) {
      dispatch(updateUser(user));
    }
  }, [user]);

  useEffect(() => {
    authChange(setSession);
  }, []);

  useEffect(() => {
    async function getData() {
      // const collections = await fetchAllCollections();
      const { error, data } = await getCollections(0, 20);
      if (error) {
        dispatch(fetchCollections([]));
      } else {
        const collections = data;
        console.log("collections", collections)
        dispatch(fetchCollections(collections));
      }
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