import React from "react";
import PropTypes from 'prop-types';
import "./UpdateBtn.css";
import { Button } from 'reactstrap';

class UpdateBtn extends React.Component {
  
  render () {
    return (
      <span className="update-btn" onClick={this.props.onClick}>
        <Button color="warning">UPDATE</Button>{' '}
      </span>
    );
  }
}

UpdateBtn.props = {
  onClick: PropTypes.func
}

export default UpdateBtn;
