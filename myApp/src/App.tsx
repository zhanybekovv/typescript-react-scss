import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Header from './components/Header/Header';
import MainView from "./components/MainView/MainView";
import SideBar from "./components/SideBar/SideBar";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import "./App.css"


function App() {
  return(
    <div style={{backgroundColor: "rgb(230, 230, 230)", paddingTop: "5rem"}}>
      <Router>
        <div style={{marginRight: "10%", marginLeft: "10%"}}>
        <hr/>
          <Header/>
          <div className="d-flex flex-row w-100">
            <div className="" style={{paddingRight: "30px", width: "85%"}}>
              <Route exact path="/" component={() => (<Redirect to='/main' />)} />
              <Route exact path="/main" component={MainView} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
            </div>
            <div className="" style={{width: "15%"}}>
              <SideBar/>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
