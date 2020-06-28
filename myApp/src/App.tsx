import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Header from './Header';
import MainView from "./MainView";
import SideBar from "./SideBar";
import About from "./About";
import Contacts from "./Contacts";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import "./App.css"


function App() {
  return(
    <div style={{backgroundColor: "gray"}}>
      <Router>
        <div style={{marginRight: "20%", marginLeft: "20%"}}>
          <Header/>
          <div className="d-flex flex-row w-100">
            <div className="" style={{paddingRight: "30px", width: "80%"}}>
              <Route exact path="/" component={() => (<Redirect to='/main' />)} />
              <Route exact path="/main" component={MainView} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
            </div>
            <div className="" style={{width: "20%"}}>
              <SideBar/>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
