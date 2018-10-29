import * as React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
  <header>
    <nav>
      <ul>
        {/* <li><Link to={routes.SIGN_IN}>Sign In</Link></li> */}
        {/* <li><Link to={routes.HOME}>Home</Link></li> */}
        {/* <li><Link to={routes.SIGN_UP}>Sign Up</Link></li> */}
      </ul>
    </nav>
  </header>

export default Navigation;