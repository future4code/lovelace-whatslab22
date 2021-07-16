import React from 'react'

class Input extends React.Component {
    render() {
      return (
          <input
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
          />
      );
    }
  }
  
  export default Input;
  