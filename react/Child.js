import React, { Component } from 'react';

class Child extends Component {
    state = {  }
    render() { 
        console.log('child render')
        return ( 
    <div>{this.props.number}</div>
         );
    }
}
 
export default Child;