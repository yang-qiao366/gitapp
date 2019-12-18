import React, { Component } from 'react';

class Number extends Component {
   componentWillReceiveProps() {
		console.log('child componentWillReceiveProps ----');
	}

	shouldComponentUpdate() {
		console.log('child shouldComponentUpdate');
        return true;
	}

	componentWillMount() {
		console.log('child componentWillMount');
	}

	render() {
		console.log('child render');
		return <div>{this.props.count}</div>
	}

	componentDidMount() {
		console.log('child componentDidMount');
	}

}
 
export default Number;
