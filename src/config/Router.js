import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Main from '../containers/Main';


function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </Router>
    )
}

export default AppRouter;