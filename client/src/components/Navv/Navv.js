import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Button, Col, Row } from 'reactstrap';
import fire from "../../pages/Login/fire";

export default class Navv extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };


  }
  logout() {
    fire.auth().signOut();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Row>
        <Col>
          <Nav pills>
            <NavItem>
              <NavLink href="#" disabled>BurnOut</NavLink>
            </NavItem>
            {/* <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          
            <DropdownMenu body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}><p className="text-danger">Soccer</p></DropdownItem>
              <DropdownItem divider />
              <DropdownItem body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}><p className="text-danger">Basketball</p></DropdownItem>
              <DropdownItem divider />
              <DropdownItem body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}><p className="text-danger">Football</p></DropdownItem>
              <DropdownItem divider />
              <DropdownItem body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}><p className="text-danger">Track</p></DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
            <NavItem>
              <NavLink href="https://www.youtube.com/"> <p className="text-danger">YouTube </p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.bodybuilding.com/store/top50.htm" target="_blank"> <p className="text-danger">Supplements</p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.bodybuilding.com/fun/8-muscle-building-diet-essentials.html" target="_blank"><p className="text-danger"> Dieting </p></NavLink>
            </NavItem>
            <p className="text-danger" >|</p>
            {/* <NavItem>
            <NavLink href="#"> <p className="text-danger"> Log-in </p></NavLink>
          </NavItem> */}

            <NavItem>
              <NavLink href="#" className="float-right">
                <Button color="danger" onClick={this.logout} className="text-dark">Logout
            </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    );
  }
}
