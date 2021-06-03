import { email } from "../../redux/auth/auth-selectors";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";
import PropTypes from "prop-types";

const UserMenu = ({ userEmail, onLogout }) => {
  return (
    <div>
      <p>{`${userEmail}`}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
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
