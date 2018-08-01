import React from "react";
import PropTypes from 'prop-types';
import "./InfoBtn.css";
import { Button } from 'reactstrap';

class InfoBtn extends React.Component {
  
  render () {
    return (
      <span className="Info-btn" onClick={this.props.onClick}>
        <Button color="warning">INFO</Button>{' '}
      </span>
    );
  }
}

InfoBtn.props = {
  onClick: PropTypes.func
}

export default InfoBtn;
