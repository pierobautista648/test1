import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <p>List Based</p>
        <Row>
          <Col>

            <Nav vertical>
              <NavItem>
                <NavLink href="#"><p className="text-danger"> Link </p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><p className="text-danger"> Another Link </p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#"><p> SOME INFO </p></NavLink>
              </NavItem>
            </Nav>

          </Col>
          <Col>
            <Nav vertical>

              <NavItem>
                <NavLink disabled href="#"><p> SOME INFO SOME INFO SOME INFO SOME INFO
                SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO
                SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO
              SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO SOME INFO </p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><p className="text-danger"> @ThisIsACopyRight </p></NavLink>
              </NavItem>
            </Nav>

          </Col>
        </Row>
      </Container >
    );
  }
}