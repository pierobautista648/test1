import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>

            <Nav vertical>
              <NavItem>
                <NavLink href="https://www.youtube.com/"><p className="YouTube"> Link </p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.bodybuilding.com/store/top50.htm"><p className="text-danger"> Supplements </p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.bodybuilding.com/store/dietweight.html"><p> Dieting </p></NavLink>
              </NavItem>
            </Nav>

          </Col>
          <Col>
            <Nav vertical>

              <NavItem>
                <NavLink disabled href="#"><p> Results may vary from person to person</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><p className="text-danger"> @BurnOut </p></NavLink>
              </NavItem>
            </Nav>

          </Col>
        </Row>
      </Container >
    );
  }
}