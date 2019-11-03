import React from 'react';
import './Form.css'
import Button from '../buttons/Button'

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
    if (props.submit) {
        classList += ` submit`
        return (
          <form onSubmit={ props.handleSubmit }>
            <input 
            className = {classList}
            placeholder={props.value} />
            <Button
            label= {props.label}
            type="primary"></Button>
          </form>
        );
      }
    if (props.small){
        classList+= ` small` 
        return (
            <form onSubmit={ props.handleSubmit }
            className = 'tiny'>
            <input 
            className = {classList}
            placeholder={props.value} />
            <Button
            label= {props.label}
            type="primary"></Button>
          </form>
        )
           
    }
    return (<form className= {classList}>
        <label>{props.label}</label>
        
        <input className={input} placeholder={props.label}></input>
    </form>)
}
export default Form

