import React from 'react';
import './Button.css'
// import cart from './Images/cart_2.png';

const Button = (props) => {
    let classList = ''
    let types = ['primary', 
    'danger', 
    'success',
    'warning', 
    'default']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`}
    if (props.hover){
        classList += ` button-${props.type}-hover`}
    if (props.hollow) {
        classList += ` button-${props.type}-hollow`}
    if (props.transparent) {
        classList += ` button-${props.type}-transparent`}
    if (props.addtocart) {
        // return (
        //     <div>
        //         <img 
        //         src= {cart} alt= ""></img>
        //     </div>
        // )
    }
    return <button className= {classList}>
        {props.label}
    </button>
}

export default Button;

