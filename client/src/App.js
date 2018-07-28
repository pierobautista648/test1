import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Workouts from "./pages/Workouts";
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const App = () =>
    <Jumbotron body inverse style={{ backgroundColor: '#212121', borderColor: '#333' }}>

      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Workouts} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      <Footer />

    </Jumbotron>

export default App;

