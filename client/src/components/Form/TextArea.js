import React from "react";
import PropTypes from 'prop-types';
import YouPop from "../YouPop";

class TextArea extends React.Component {
  // Destructuring the type, className, children and onClick props, applying them to the button element

  render() {

    return (
      <div className="form-group">
        <textarea className="form-control" rows="12" {...this.props}
        />                   

      </div>
    )
  }
}

TextArea.props = {
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextArea
