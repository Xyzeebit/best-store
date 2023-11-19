import PropTypes from 'prop-types'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ renderHeader, children }) => {
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