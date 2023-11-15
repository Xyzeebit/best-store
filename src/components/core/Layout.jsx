import PropTypes from 'prop-types'
import Header from './Header';

const Layout = ({ renderHeader, children }) => {
    return (
        <>
            {renderHeader && <Header />}
            {children}
        </>
    );
}

Layout.propTypes = {
    renderHeader: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Layout;