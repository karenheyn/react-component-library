import React from 'react';
import './Form.css'

const Form = (props) => {
    let classList = ''
    let types = ['email']
    let input = ''
    if (types.includes(props.type)){
        classList += ` form-${props.type}`
        input += ` form`
    }
    if (props.medium){
        classList += ` form-${props.type}-medium`
        input += ` medium-form`
    }
    if (props.large){
        classList += ` form-${props.type}-medium`
        input += ` large-form`
    }
    return <form className= {classList}>
        <label>{props.label}</label>
        
        <input className={input} placeholder={props.label}></input>
    </form>
}
export default Form