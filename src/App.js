import React, { Component } from 'react';
// Homework 3
class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCounter = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrementCounter = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCounter}>+1</button>
                <button onClick={this.decrementCounter}>-1</button>
            </div>
        );
    }
}

export default Counter;
