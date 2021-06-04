import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import routs from "./router";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { getIsLoading } from "./redux/auth/auth-selectors";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

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

const loaderProps = {
  type: "ThreeDots",
 color: "#fc4445",
              height: 100,
              width: 100,
              timeout: 2000,
}

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
        <div className="contentWrapper">
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
              <Loader {...loaderProps}/>
            ) : (
              <PublicRoute
                path={routs.RegisterView}
                restricted
                redirectTo={routs.ContactsView}
                exact
                component={RegisterView}
              />
            )}
            {isLoading ? (
              <Loader {...loaderProps}/>
            ) : (
              <PublicRoute
                path={routs.LoginView}
                restricted
                redirectTo={routs.ContactsView}
                component={LoginView}
              />
            )}
            <PrivateRoute
              path={routs.ContactsView}
              redirectTo={routs.LoginView}
              exact
              component={Contacts}
            />
          </Switch>
        </Suspense>
        </div>
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
