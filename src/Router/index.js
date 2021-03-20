import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../Screens/Home'
import Comparsion from '../Screens/Comparsion'
import Login from '../Screens/Login'
import Scholarship from '../Screens/Scholarship'


function RouterComponent() {
  return (
      
    <Router>
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/compare"  component={Comparsion} />
            <Route path="/login"  component={Login} />
            <Route path="/scholarship"  component={Scholarship} />
     </Switch>
     </Router>

  );
}

export default RouterComponent;
