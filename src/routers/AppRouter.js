import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "../components/Login";

export const AppRouter = () => {
    return (
       <Router>
           <Switch>
               <Route exact to='/' components={Login} />
           </Switch>
       </Router>
    )
}
