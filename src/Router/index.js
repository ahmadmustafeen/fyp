import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../Screens/Home'
import Comparsion from '../Screens/Comparsion'
import Login from '../Screens/Login'
import Scholarship from '../Screens/Scholarship'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Scholarshipdetails from '../Screens/Scholarshipdetails'


function RouterComponent() {
  return (
      <>
    <Router>

      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/compare"  component={Comparsion} />
            <Route path="/scholarship"  component={Scholarship} />
            <Route path="/scholarship_overview"  component={Scholarshipdetails} />

     </Switch>

     </Router>
</>
  );
}

export default RouterComponent;
