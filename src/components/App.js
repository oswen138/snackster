import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <TicketControl />
        </Route>
      </Switch>
    </Router>
  );
}