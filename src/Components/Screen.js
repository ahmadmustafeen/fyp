import {BrowserRouter as Router, withRouter } from 'react-router-dom';
import AuthRouterComponent from '../AuthRouter.js';
import RouterComponent from '../Router'
import Footer from './Footer'
import Header from './Header'

function Screen() {
  return (
      <Router>
      {/* <Header/> */}
      <AuthRouterComponent />
      <RouterComponent />
      {/* <Footer /> */}
      </Router>
  );
}

export default Screen;
