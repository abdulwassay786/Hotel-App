import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Main from '../containers/Main';
import Rooms from '../containers/Rooms';


function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/rooms" component={Rooms} />
            </Switch>
        </Router>
    )
}

export default AppRouter;