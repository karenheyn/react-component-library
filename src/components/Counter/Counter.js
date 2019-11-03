import React, {Component} from 'react';
import './Counter.css'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count,
        }
        this.decreaseCount = this.decreaseCount.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount = (evt) => {
        evt.preventDefault()
        if (this.state.count < this.props.max){
        let count = this.state.count + this.props.step;
        this.setState({count:count});
        }
    }
    decreaseCount = (evt) => {
        evt.preventDefault()
        if (this.state.count > this.props.min){
        let count = this.state.count - this.props.step;
        this.setState({count:count});
        }
    }
    render() {
        return (
            <div className = 'container'>
            <button onClick={this.decreaseCount} className='button'>-</button>
            <h4>{this.state.count}</h4>
            <button onClick={this.increaseCount} className='button'>+</button>
            </div>
        )
    }
}
export default Counter;