import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import Dropdown1 from "../../components/Dropdown1";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import InfoBtn from "../../components/InfoBtn";
import DeleteBtn from "../../components/DeleteBtn";

export default class Workouts extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      workouts: [],
      workoutType: "",
      subworkout: [],
      routine: "",
      _id: "",
      collapsed: true
    };
  }
  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  componentDidMount() {
    this.loadWorkouts();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadWorkouts = () => {
    API.getWorkouts()
      .then(res =>
        this.setState({ workouts: res.data, workoutType: "", routine: "", subWorkout: "", workoutInfo: "" })
      )
      .catch(err => console.log(err));
  };

  deleteWorkouts = id => {
    API.deleteWorkouts(id)
      .then(res => this.loadWorkouts())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.workoutType && this.state.routine && this.state.subWorkout && this.state.workoutInfo && this.state.youtubeId) {
      API.saveWorkouts({
        workoutType: this.state.workoutType,
        routine: this.state.routine,
        subWorkout: this.state.subWorkout,
        youtubeId: this.state.youtubeId,
        workoutInfo: this.state.workoutInfo
      })
        .then(res => this.loadWorkouts())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Container>
        <Jumbotron body inverse style={{ backgroundColor: '#424242', borderColor: '#333' }}>
          <Row>
            <Col>
              <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
                <h1 className="lead">Choose Type of Workout</h1>

                <div>
                  <Navbar color="faded" light>
                    {this.state.workouts.length ? (
                      <div>
                        {this.state.workouts.map(workouts => {
                          return (
                            <div>

                              <NavbarBrand href="/" className="mr-auto">{workouts.workoutType}</NavbarBrand>

                              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

                              <Collapse isOpen={!this.state.collapsed} navbar>
                                <div key={workouts._id}>
                                  {/* <NavItem> */}
                                  {/* <a href={"/workouts/" + workouts._id}> */}
                                  {/* </a> */}
                                  <a href={"/workouts/" + workouts._id}>
                                    <InfoBtn onClick={() => this(workouts._id)} />
                                  </a>
                                  <DeleteBtn onClick={() => this.deleteWorkouts(workouts._id)} />
                                  {/* </NavItem> */}
                                </div>
                                <Nav navbar>
                                  <NavItem>
                                    <NavLink href="">{workouts.subWorkout}</NavLink>
                                  </NavItem>
                                </Nav>
                              </Collapse>

                            </div>
                          );
                        })}
                      </div>
                    ) : (
                        <h3>No Results to Display</h3>
                      )}

                  </Navbar>
                </div>

              </Jumbotron>

            </Col>
            <Col>
              <div>
                <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
                  <h1 className="display-3">Video Here</h1>
                </Jumbotron>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
                <h1 className="lead">Choose Type of Workout</h1>

                <form>
                  <Input
                    value={this.state.workoutType}
                    onChange={this.handleInputChange}
                    name="workoutType"
                    placeholder="Type of workout (required)"
                  />
                  <Input
                    value={this.state.routine}
                    onChange={this.handleInputChange}
                    name="routine"
                    placeholder="Routine (required)"
                  />
                  <Input
                    value={this.state.subWorkout}
                    onChange={this.handleInputChange}
                    name="subWorkout"
                    placeholder="sub-workout (required)"
                  />
                  <Input
                    value={this.state.youtubeId}
                    onChange={this.handleInputChange}
                    name="youtubeId"
                    placeholder="Youtube Id (required)"
                  />
                  <TextArea
                    value={this.state.workoutInfo}
                    onChange={this.handleInputChange}
                    name="workoutInfo"
                    placeholder="Description of workout (Required)"
                  />
                  <FormBtn
                    disabled={!(this.state.workoutType && this.state.routine && this.state.subWorkout && this.state.workoutInfo && this.state.youtubeId)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Workout
              </FormBtn>
                </form>

              </Jumbotron>
            </Col>
            {/* <Col>
              <div>
                {this.state.workouts.length ? (
                  <div>
                    {this.state.workouts.map(workouts => {
                      return (
                        <div>
                          <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
                            <h1 className="display-3">{workouts.workoutType}</h1>
                            <p className="lead">Category</p>
                            <hr className="my-2" />
                            <p>{workouts.workoutInfo}
                            </p>
                            <p className="lead">
                            </p>
                          </Jumbotron>

                        </div>
                      );
                    })}
                  </div>
                ) : (
                    <h3>No Results to Display</h3>
                  )}

              </div>
            </Col> */}
          </Row>
        </Jumbotron>

      </Container >

    );
  }
}