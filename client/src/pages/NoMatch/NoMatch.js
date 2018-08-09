import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Container, Row, Col } from 'reactstrap';

class NoMatch extends React.Component {

  render() {

    return (
      <Container fluid>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Jumbotron>
              <h1 className="text-center">404 Page Not Found</h1>
              <p className="text-center">(You Done Goofed up Fam)</p>
              <h1 className="text-center">
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </span>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default NoMatch;
