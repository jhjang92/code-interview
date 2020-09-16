import React from 'react';

class Input extends React.Component {
  render() {
    return <input name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />;
  }
}

export default Input;
