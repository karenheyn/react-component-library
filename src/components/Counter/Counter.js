import React, {Component} from 'react';
import './Counter.css'

// class Counter extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
//             count: this.props.count,
//             // step: this.props.step,
//         };
//         this.increaseCount = this.increaseCount.bind(this)
//         this.decreaseCount = this.decreaseCount.bind(this)
// 	}
// 	increaseCount = () => {
// 		let count = this.state.count + this.state.step;
// 		this.setState({
// 			count: count
// 		});
// 	};
// 	decreaseCount = () => {
// 		let count = this.state.count - this.state.step;
// 		this.setState({
// 			count: count
// 		});
// 	};
// 	render() {
// 		console.log(this.state);
// 		return (
// 			<div className='App'>
// 				<h1>count: {this.state.count}</h1>
// 				<button onClick={this.increaseCount}>+</button>
// 				<button onClick={this.decreaseCount}>-</button>
// 			</div>
// 		);
// 	}
// }
// export default Counter;
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        }
        this.decreaseCount = this.decreaseCount.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount = (evt) => {
        evt.preventDefault()
        let count = this.state.count + this.props.step;
        this.setState({count:count});
    }
    decreaseCount = (evt) => {
        evt.preventDefault()
        let count = this.state.count - this.props.step;
        this.setState({count:count});
    }
    render() {
        return (
            <div>
            <button onClick={this.increaseCount}></button>
            <h3>{this.state.count}</h3>
            <button onClick={this.decreaseCount}></button>
            </div>
        )
    }
}
export default Counter;