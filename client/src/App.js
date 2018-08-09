import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Workouts from "./pages/Workouts";
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import app from "./pages/Login/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

const App = () =>

  <Jumbotron body inverse style={{ backgroundColor: '#001', borderColor: '#333' }}>

    <a href="/" style={{ textDecoration: 'none' }}>
      <h1 className="text-center text-danger">
      <FontAwesomeIcon icon={faFire} />

        <i class="fab fa-GripFire"> - B U R N O U T - </i>
        <FontAwesomeIcon icon={faFire} />


        {/* <img src={require('./img/myPic2.jpg')} /> */}

      </h1>
    </a>
    <Router>
      <div>
        <Switch>
          <Route exact path="/test" component={Workouts} />
          <Route exact path="/" component={app} />

          {/* <Route exact path="/books" component={Books} /> */}
          <Route exact path="/workouts/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <Footer />

  </Jumbotron>

export default App;

