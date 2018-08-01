import React from "react";
import PropTypes from 'prop-types';
import "./DeleteBtn.css";
import { Button } from 'reactstrap';

class DeleteBtn extends React.Component {
  
  render () {
    return (
      <span className="delete-btn" onClick={this.props.onClick}>
        <Button color="danger">DELETE</Button>{' '}
      </span>
    );
  }
}

DeleteBtn.props = {
  onClick: PropTypes.func
}

export default DeleteBtn;
