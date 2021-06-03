import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { connect } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth-selectors";
import PropTypes from "prop-types";

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.navLink}
        activeClassName={styles.navLinkActive}
      >
        Main
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const MSTP = (state) => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(MSTP)(Navigation);
