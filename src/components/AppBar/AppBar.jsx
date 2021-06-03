import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import { connect } from "react-redux";
import { isAuthenticated } from "../../redux/auth/auth-selectors";

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const MSTP = (state) => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(MSTP)(AppBar);
