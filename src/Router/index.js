import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../Screens/Home'
import Comparsion from '../Screens/Comparsion'
import Login from '../Screens/Login'
import Scholarship from '../Screens/Scholarship'
import Scholarshipdetails from '../Screens/Scholarshipdetails'
import Admission from '../Screens/Admission'


function RouterComponent() {
  return (
      <>

      <Switch>
            <Route path="/" exact  component={Login} />
            <Route path="/home"   component={Home} />
            <Route path="/compare"  component={Comparsion} />
            <Route path="/scholarship"  component={Scholarship} />
            <Route path="/scholarship_overview"  component={Scholarshipdetails} />
            <Route path="/admission"  component={Admission} />

     </Switch>

</>
  );
}

export default RouterComponent;
