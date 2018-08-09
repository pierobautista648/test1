import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Jumbotron, Button } from 'reactstrap';
import API from "../../utils/API";
import UpdateBtn from "../../components/UpdateBtn";
import CancelBtn from "../../components/CancelBtn";
import YouTube from 'react-youtube';

class Detail extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      workouts: {},
      isUpdate: false,

    };

  }

  // When this component mounts, grab the workouts with the _id of this.props.match.params.id
  // e.g. localhost:3000/workouts/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getWorkout(this.props.match.params.id)
      .then(res => this.setState({ workouts: res.data }))
      .catch(err => console.log(err));
  }

  handleUpdate(isUpdate) {
    this.setState({ isUpdate: isUpdate })
  }

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;

    const updatedWorkouts = { ...this.state.workouts }
    updatedWorkouts[name] = value

    this.setState({
      workouts: updatedWorkouts
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.workouts.workoutType && this.state.workouts.routine && this.state.workouts.subWorkout && this.state.workouts.youtubeId) {
      API.patchWorkouts(this.props.match.params.id, this.state.workouts)
        .then(res => this.setState({ isUpdate: false }))
        .catch(err => console.log(err));
    }
  };

  getReadOnly = () => (

    <Container fluid>
      <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>

        <Row>
          <Col>
            <h1 className="display-3">{this.state.workouts.workoutType}</h1>
            <p className="lead">({this.state.workouts.subWorkout})</p>

          </Col>
        </Row>
        <Row>
          <Col>
            <hr/>
            <p>{this.state.workouts.workoutInfo}
            </p>
            <p>
            </p>
          </Col>
          {/* <Col>

            <YouTube
              videoId="2g811Eo7K8U"
              opts={opts}
              onReady={this._onReady}
            />          </Col> */}

        </Row>

        <Row>
          <div>
            <UpdateBtn onClick={() => this.handleUpdate(true)}>Update</UpdateBtn>
          </div>
        </Row>

        <Row>

        </Row>


      </Jumbotron>
      <Col size="md-2">
        <Link color="warning" to="/">⏎ Return to workouts</Link>
      </Col>
    </Container>
  );

  getUpdateform = () => (
    <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>
      <Row>
        <Col>
          <h1>Update Workout Information</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form>
            <Input
              value={this.state.workouts.workoutType}
              onChange={this.handleInputChange}
              name="workoutType"
              placeholder="Type of workout (required)"
            />
            <Input
              value={this.state.workouts.routine}
              onChange={this.handleInputChange}
              name="routine"
              placeholder="Routine (required)"
            />
            <Input
              value={this.state.workouts.subWorkout}
              onChange={this.handleInputChange}
              name="subWorkout"
              placeholder="sub-workout (required)"
            />
            <Input
              value={this.state.workouts.youtubeId}
              onChange={this.handleInputChange}
              name="youtubeId"
              placeholder="Youtube Id (required)"
            />
            <TextArea
              value={this.state.workouts.workoutInfo}
              onChange={this.handleInputChange}
              name="workoutInfo"
              placeholder="Description of workout (Optional)"
            />

            <CancelBtn onClick={() => this.handleUpdate(false)}>Cancel</CancelBtn>
            <FormBtn
              disabled={!(this.state.workouts.workoutType && this.state.workouts.routine && this.state.workouts.subWorkout && this.state.workouts.youtubeId)}
              onClick={this.handleFormSubmit}
            >
              Submit Update
            </FormBtn>
          </form>
        </Col>
      </Row>
    </Jumbotron>
  );

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    if (this.state.isUpdate) return (this.getUpdateform()

    );

    else return (
      <Container fluid>
        <Jumbotron body inverse style={{ backgroundColor: '#616161 ', borderColor: '#333' }}>

          <Row>
            <Col size="md-12">
              <h1 className="display-3">{this.state.workouts.workoutType}</h1>
              <p className="lead">({this.state.workouts.subWorkout})</p>

            </Col>
          </Row>
          <Row>
            <Col>
              <hr className="my-2" />
              <p>{this.state.workouts.workoutInfo}
              </p>
              <p className="lead">
              </p>
            </Col>
            <Col>

              <YouTube
                videoId={this.state.workouts.youtubeId}
                opts={opts}
                onReady={this._onReady}
              />          </Col>

          </Row>

          <Row>
            <div>
              <UpdateBtn onClick={() => this.handleUpdate(true)}>Update</UpdateBtn>
            </div>
          </Row>

          <Row>

          </Row>


        </Jumbotron>
        <Col size="md-2">
          <Link color="warning" to="/">⏎ Return to workouts</Link>
        </Col>
      </Container>
    );

  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}


export default Detail;
