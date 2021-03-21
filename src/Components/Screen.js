import {BrowserRouter as Router, withRouter } from 'react-router-dom';
import RouterComponent from '../Router'
import Footer from './Footer'
import Header from './Header'

function Screen() {
  return (
      <Router>
      <Header/>
      <RouterComponent />
      <Footer />
      </Router>
  );
}

export default Screen;
