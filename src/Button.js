import React from 'react';
import './Button.css'

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
    return <button className= {classList}>
        {props.label}
    </button>
}

export default Button;

