import React, {Component} from 'react';
// import checkmark from './checkmark'
 class Checkbox extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             checked: this.props.checked
          }
     }
     render() { 
         return ( 
            
            <label className='container' for={this.props.name}>
            <input 
            type='checkbox'
            className='checkmark'
            name = {this.props.name}></input>
            <span className='checkmark'></span>
            {this.props.text}</label>
          );
     }
 }
  
 export default Checkbox;