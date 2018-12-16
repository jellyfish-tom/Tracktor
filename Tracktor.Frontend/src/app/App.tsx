// import * as mobx from "mobx";
import { observer, Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

import Navigation from "./components/Navigation";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
// import PasswordForget from "./PasswordForget";
import Home from "./pages/Home";
import { AddSugar } from "./pages/addSugar";
import AppStore from "./AppStore";
// import Account from "./Account";

import * as routes from "./constants/routes";
import "antd/dist/antd.css";

declare let module: any;

// mobx.useStrict(true);
OfflinePluginRuntime.install();

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
  //SET SOME VISUAL INDICATOR IN APP
}

if (module.hot) {
  module.hot.accept();
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.ADD_SUGAR} component={AddSugar} />
      {/* <Route path={routes.SIGN_IN} component={SignIn}/> */}
      {/* <Route path={routes.SIGN_UP} component={SignUp}/> */}
    </Switch>
  </main>
);

const appStore = new AppStore(); // TODO: (pass initialized api here)
// TODO: wrap with <ErrorBoundary> (check Signal)
const App = () => (
  // <React.Fragment>
  // <Navigation />
  <Main />
  // </React.Fragment>
);

ReactDOM.render(
  <Provider appStore={appStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
