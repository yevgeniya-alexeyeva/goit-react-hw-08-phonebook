import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import AppBar from "./components/AppBar";
import PropTypes from "prop-types";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loader from "react-loader-spinner";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { getIsLoading } from "./redux/auth/auth-selectors";

const HomeView = lazy(() =>
  import(/* webpackChunkName: "HomeView" */ "./views/home-view")
);
const RegisterView = lazy(() =>
  import(/* webpackChunkName: "RegisterView" */ "./views/register-view")
);
const LoginView = lazy(() =>
  import(/* webpackChunkName: "LoginView" */ "./views/login-view")
);
const Contacts = lazy(() =>
  import(/* webpackChunkName: "Contacts" */ "./views/contacts-view")
);

class App extends Component {
  componentDidMount() {
    this.props.onUserRefresh();
  }

  static propTypes = {
    onUserRefresh: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <AppBar />
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#fc4445"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          <Switch>
            <Route path="/" exact component={HomeView} />
            {isLoading ? (
              <Loader
                type="ThreeDots"
                color="#fc4445"
                height={100}
                width={100}
                timeout={3000}
              />
            ) : (
              <PublicRoute
                path="/register"
                restricted
                redirectTo="/"
                exact
                component={RegisterView}
              />
            )}
            {isLoading ? (
              <Loader
                type="ThreeDots"
                color="#fc4445"
                height={100}
                width={100}
                timeout={3000}
              />
            ) : (
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/"
                component={LoginView}
              />
            )}
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              exact
              component={Contacts}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const MSTP = (state) => ({
  isLoading: getIsLoading(state),
});

const MDTP = {
  onUserRefresh: getCurrentUser,
};

export default connect(MSTP, MDTP)(App);
