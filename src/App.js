import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component, Suspense, lazy } from "react";
import { connect } from "react-redux";
import AppBar from "./components/AppBar";
// import HomeView from "./views/home-view";
// import Contacts from "./views/contacts-view";
// import RegisterView from "./views/register-view";
// import LoginView from "./views/login-view";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loader from "react-loader-spinner";
import { getCurrentUser } from "./redux/auth/auth-operations";

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

  render() {
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
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/"
              exact
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/"
              component={LoginView}
            />
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

const MDTP = {
  onUserRefresh: getCurrentUser,
};

export default connect(null, MDTP)(App);
