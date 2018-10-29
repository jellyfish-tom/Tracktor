import * as React from "react"
import { Switch, Route } from "react-router-dom"

import SignUp from "./SignUp";
import SignIn from "./SignIn";
// import PasswordForget from "./PasswordForget";
import Home from "./Home";
// import Account from "./Account";

import * as routes from "../constants/routes";

const Main = () => (
  <main>
    <Switch>
      <Route exact path={routes.HOME} component={Home}/>
      {/* <Route path={routes.SIGN_IN} component={SignIn}/> */}
      {/* <Route path={routes.SIGN_UP} component={SignUp}/> */}s
    </Switch>
  </main>
)

export default Main