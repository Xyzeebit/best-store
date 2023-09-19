import PropTypes from 'prop-types'

const Container = ({ children }) => (
    <main>{children}</main>
);

Container.propTypes = {
    children: PropTypes.node
}

export default Container;