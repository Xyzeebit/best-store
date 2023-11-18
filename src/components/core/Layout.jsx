import PropTypes from 'prop-types'
import Header from './Header';

const Layout = ({ renderHeader, children }) => {
    return (
        <div className="md:bg-gray-50">
            {renderHeader && <Header />}
            {children}
        </div>
    );
}

Layout.propTypes = {
    renderHeader: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Layout;