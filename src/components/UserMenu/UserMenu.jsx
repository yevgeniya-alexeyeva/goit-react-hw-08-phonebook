import { email } from "../../redux/auth/auth-selectors";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import styles from './UserMenu.module.css';




const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.email}>{`${userEmail}`}</p>
      <Button
      className={styles.button}
            type="button"
            onClick={onLogout}
            variant="contained"
            color="primary"
            size="medium"
          >Logout</Button>
    </div>
  );
};

UserMenu.propTypes = {
  userEmail: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const MSTP = (state) => ({
  userEmail: email(state),
});

const MDTP = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export default connect(MSTP, MDTP)(UserMenu);
