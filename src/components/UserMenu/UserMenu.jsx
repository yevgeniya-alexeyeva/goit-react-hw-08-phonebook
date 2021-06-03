import { email } from "../../redux/auth/auth-selectors";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/auth-operations";

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

const MSTP = (state) => ({
  userEmail: email(state),
});

const MDTP = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export default connect(MSTP, MDTP)(UserMenu);
