import React from 'react';
import './Button.css';
// import cart from './Images/cart_2.png';
// import Heart from './heart'
import Cart from './cart'
import Heart from './heart'

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
        classList += ` button-${props.type}addtocart`
        return(
            <button className = {classList}><Cart/>{props.label}</button>
        )
    }
    if (props.addtofav) {
        classList += ` button-addtofav`
        return(
            <button className = {classList}><Heart/>{props.label}</button>
        )
    }
    if (props.smallcart){
        classList += ` button-smallcart`
        return(
            <button className = {classList}><Cart/></button>
        )
    }
    if (props.smallheart){
        classList += ` button-smallheart`
        return(
            <button className = {classList}><Heart/></button>
        )
    }
    
    return <button className= {classList}>
        {props.label}
    </button>
}

export default Button;
