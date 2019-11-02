import React from 'react';
import './Select.css'
import Carat from './arrowdown.png'

const Select = (props) => {
    let classList = ''
    let types = ['select']
    if (types.includes(props.type)) {
        classList += ` ${props.type}`
        // console.log(props)
    }
    if (props.medium) {
        classList += ` ${props.type}-medium`
        // console.log(props)
    }
    if (props.small) {
        classList += ` ${props.type}-small`
    }
    if (props.filled){
        classList += ` filled`
    }
    return(
        <select img = {Carat} alt = '^'
        className = {classList}
        onChange = {props.handleChange}>
            	{props.options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
        </select>
    )
} 


export default Select