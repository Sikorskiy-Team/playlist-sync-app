import React from 'react';

class ClickBtn extends React.Component {

  constructor(props) {
    super(props);

    this.press = this.press.bind(this);

    this.state = { isToggleOn: false };
  }
  press() {
    let className = (this.state.class === "on") ? "off" : "on";
    this.setState({ class: className });

    this.setState(function (prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }
  render() {
    return <button onClick={this.press} className={this.state.class}>
             {this.state.isToggleOn ? 'ON' : 'OFF'}
           </button>;
  }
  
}

export default ClickBtn;