import { connect } from "react-redux";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import Container from '../UI/Container'
import { isAuthenticated } from "../../redux/auth/auth-selectors";
import PropTypes from "prop-types";
import styles from './AppBar.module.css';





const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
      </Container>
    </header>
  );
};

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const MSTP = (state) => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(MSTP)(AppBar);
