import React from 'react';

class Button extends React.Component {
  render() {
    const buttonStyle = {
      background: this.props.FontColor,
    };
    if (this.props.FontColor && this.props.onClick) {
      return (
        <button style={buttonStyle} onClick={this.props.onClick}>
          {this.props.Text}
        </button>
      );
    }
    return <button>{this.props.Text}</button>;
  }
}

export default Button;
