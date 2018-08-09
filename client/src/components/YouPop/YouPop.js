import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class YouPop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
      popovers: [
        {
          placement: 'right',
          text: 'Right'
        },
      ]
    });
  }

  render() {
    return (
      <div>
        <Button className="float-right float-top" id="Popover1" onClick={this.toggle}>
          ⓘ </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>The YouTube Id is the last 11 characters in the Url
            on the YouTube video you want to add.
          </PopoverHeader>
          <PopoverBody>
            Youtube Video URL: "https://www.youtube.com/watch?v=F3p5NEQpzbI"------------------------
            Id: "F3p5NEQpzbI"
 </PopoverBody>
        </Popover>
      </div>
    );
  }
}