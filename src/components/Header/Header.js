import PropTypes from 'prop-types';
import { Container } from './Header.styles';

const Header = ({ children }) => <Container>{children}</Container>;

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
