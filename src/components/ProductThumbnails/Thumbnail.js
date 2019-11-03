import React, {Component} from 'react';
import './Thumbnail.css'
import mac from './mac.png'

class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div><img src = {mac} alt = 'mac'></img></div>
                <hr></hr><h2>fvd</h2><img src = {mac} alt = 'mac'></img>
                <div><h3>fdvd</h3></div>
            </div>
         );
    }
}
 
export default Thumbnail;