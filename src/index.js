import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import Loader from "react-loader-spinner";

const loaderProps = {
  type: "ThreeDots",
 color: "#fc4445",
              height: 500,
              width: 500,
              timeout: 3000,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader {...loaderProps}/>} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
