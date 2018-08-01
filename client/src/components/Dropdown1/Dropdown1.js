import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

export default class Workouts extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      workouts: [],
      workoutType: "",
      subworkout: [],
      Routine: "",
      _id: "",
      collapsed: true
    };

    // this.state = {
    // };
  }
  componentDidMount() {
    this.loadWorkouts();
  }

  // Loads all Workouts  and sets them to this.state.Workouts
  loadWorkouts = () => {
    API.getWorkouts()
      .then(res =>
        this.setState({ workouts: res.data, workoutType: "", Routine: "", subworkout: "" })
      )
      .catch(err => console.log(err));
  };

  deleteWorkouts = id => {
    API.deleteWorkouts(id)
      .then(res => this.loadWorkouts())
      .catch(err => console.log(err));
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.workouts && this.state.author) {
      API.saveWorkouts({
        workouts: this.state.workouts,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
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
    );
  }
}