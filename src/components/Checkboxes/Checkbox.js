import React, {Component} from 'react';
import './Checkbox.css'

 class Checkbox extends Component {
     constructor(props) {
         super(props);
         this.state = { 
             isChecked: 'unchecked'
          }
          this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
     }
     handleCheckboxChange = (event) =>{
     if (this.state.isChecked === 'unchecked'){
         this.setState({isChecked:'checked'})}
        if (this.state.isChecked === 'checked'){
            this.setState({isChecked:'unchecked'})}
     }
    
    // this.setState({ checked: event.target.checked })
     render() { 
         return ( 
            <label 
            className={this.state.isChecked}>
            <input 
            type='checkbox'
            className= {this.state.isChecked}
            name = {this.props.name}
            onChange = {this.handleCheckboxChange}>
            </input>
            <span className='checkmark'></span>
            {this.props.text}</label>
          );
     }
 }
  
 export default Checkbox;