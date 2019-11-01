import React from 'react';
import './Form.css'

const Form = (props) => {
    let classList = ''
    let types = ['primary']
    if (types.includes(props.type)){
        classList += ` form-${props.type}`
    }
    return <form className= {classList}>
        <label>Email</label>
        
        <input className='form' placeholder="Email"></input>
    </form>
}
export default Form