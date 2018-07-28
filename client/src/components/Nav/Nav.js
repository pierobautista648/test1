import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#" disabled>SITE NAME</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <div>
              <DropdownToggle nav caret >
                <div>
                  <p className="text-danger">Choose Sport</p>
                </div>

              </DropdownToggle>
            </div>
            <DropdownMenu body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
              {/* <DropdownItem header>Header</DropdownItem> */}
              {/* <DropdownItem disabled>Action</DropdownItem> */}
              <DropdownItem body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}><p className="text-danger">Soccer</p></DropdownItem>
              <DropdownItem divider />
              <DropdownItem body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}><p className="text-danger">Basketball</p></DropdownItem>
              <DropdownItem divider />
              <DropdownItem body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}><p className="text-danger">Football</p></DropdownItem>
              <DropdownItem divider />
              <DropdownItem body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}><p className="text-danger">Track</p></DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#"> <p className="text-danger">Link </p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> <p className="text-danger"> Another Link </p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#"><p className="text-danger"> Another Link </p></NavLink>
          </NavItem>
          <p className="text-danger" >|</p>
          <NavItem>
            <NavLink href="#"> <p className="text-danger"> Log-in </p></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> <p className="text-danger"> Sign-up </p></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
