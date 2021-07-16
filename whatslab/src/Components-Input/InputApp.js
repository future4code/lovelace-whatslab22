import React from 'react'

class Input extends React.Component {
    render() {
     
      return (
        <div>
          <input
          
            placeholder={this.props.placeholder}
          />
        </div>
      );
    }
  }
  
  export default Input;
  