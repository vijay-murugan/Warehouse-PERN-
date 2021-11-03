import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/home"
import update_truck from "./routes/update_truck";
import details_truck from "./routes/details_truck";
import Input_truck from "../src/components/Input_truck";
import {truckContextProvider} from "../src/context/truckContext";
import EditTruck from "../src/components/EditTruck";

const App = () => {
    return(
        // <Fragment>
        //     <div className="container">
        //         <Input_truck/>
        //     </div>
        // </Fragment>
        <truckContextProvider>
            <div className="container">
        <Router>
            <Switch>
            <Route exact path="/" component = {Home}/>
            <Route exact path="/truck/:id/update" component = {update_truck}/>
            <Route exact path="/truck/:id" component = {details_truck}/>
            <Route exact path="/truck/insert" component={Input_truck}/>
            </Switch>
        </Router>
        </div>
        </truckContextProvider>
        
    );
    
};

 export default App;