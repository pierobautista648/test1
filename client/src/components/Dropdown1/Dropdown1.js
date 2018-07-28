import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

export default class Workouts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: "",
      workoutType: "",
      subworkout: [],
      Routine: "",
      _id: ""
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
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



  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>

          {this.state.workouts.length ? (
            <List>
              {this.state.workouts.map(book => {
                return (
                  <ListItem key={book._id}>
                    <a href={"/workouts/" + workouts._id}>
                      <strong>
                        {workouts.title} by {workouts.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteBook(workouts._id)} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="">Specific Workout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Specific Workout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Specific Workout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}