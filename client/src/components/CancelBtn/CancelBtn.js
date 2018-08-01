import React from "react";
import PropTypes from 'prop-types';
import "./CancelBtn.css";
import { Button } from 'reactstrap';

class CancelBtn extends React.Component {
  
  render () {
    return (
      <span className="cancel-btn" onClick={this.props.onClick}>
        <Button color="danger">Cancel</Button>{' '}
      </span>
    );
  }
}

CancelBtn.props = {
  onClick: PropTypes.func
}

export default CancelBtn;
