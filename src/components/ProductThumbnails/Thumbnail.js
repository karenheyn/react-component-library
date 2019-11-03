import React, {Component} from 'react';
import './Thumbnail.css'
import mac from './mac.png'
import rate from './rate.png'
import Cart from './cart_2.png'
import Heart from './hearts.png'
import Whiteheart from './heart_white.png'
import Whitecart from './cart_white.png'
import beats from './beats.png'
import Button from '../buttons/Button'
import label from './label.png'

class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isHovered: 'icons-hidden'
         }
         this.hover= this.hover.bind(this)
         this.nohover= this.nohover.bind(this)
    }
        hover() {
            this.setState({
                isHovered:'icons-hidden'
            });
          }
        nohover() {
            this.setState({
              isHovered:'icons-show'
            });
          }
    render() { 
        if (this.props.blue){
        return ( 
            <div className = 'box' onMouseEnter = {this.nohover} onMouseLeave = {this.hover}>
                    <div className='hovered'>
                        <div className={this.state.isHovered}>
                            <div className='icon'><img className='icon-img' src = {Heart} alt = 'like'></img></div>
                            <div className='icon'><img className='icon-img' src = {Cart} alt = 'cart'></img></div>
                        </div>
                    <div><img className = 'mac' src = {mac} alt = 'mac'></img></div>
                    <hr></hr>
                    <h3 className = 'product'>Apple Macbook Pro</h3><img src = {rate} alt = 'rating'></img>
                    <div><h3>$499<span> $599</span></h3></div>
                    </div>
            </div>
         );
    }
    if (this.props.white){
        return ( 
            <div className = 'box' onMouseEnter = {this.nohover} onMouseLeave = {this.hover}>
                    <div className='hovered'>
                        <div className={this.state.isHovered}>
                            <div className='iconwhite'><img className='icon-img' src = {Whiteheart} alt = 'like'></img></div>
                            <div className='iconwhite'><img className='icon-img' src = {Whitecart} alt = 'cart'></img></div>
                        </div>
                    <div><img className = 'mac' src = {mac} alt = 'mac'></img></div>
                    <hr></hr>
                    <h3 className = 'product'>Apple Macbook Pro</h3><img src = {rate} alt = 'rating'></img>
                    <div><h3>$499<span> $599</span></h3></div>
                    </div>
            </div>
         );
    } 
    if (this.props.inline){
        return ( 
            <div className = 'box-inline' onMouseEnter = {this.nohover} onMouseLeave = {this.hover}>
                    <div className='box-container'>
                    <div><img className = 'mac' src = {mac} alt = 'mac'></img></div>
                    <div className='right'>
                    <h3 className = 'product'>Apple Macbook Pro</h3><img src = {rate} alt = 'rating'></img>
                    <div><h3>$499<span> $599</span></h3></div>
                    </div>
                    </div>
            </div>
         );
    } 
    if (this.props.headphones){
        return ( 
            <div className = 'box-inline2' onMouseEnter = {this.nohover} onMouseLeave = {this.hover}>
                    <div className='box-container'>
                    <div><img className = 'mac' src = {beats} alt = 'mac2'></img></div>
                    <div className='right'>
                    <h3 className = 'product'>Beats headphones</h3><img src = {rate} alt = 'rating'></img>
                    <div><h3>$499<span> $599</span></h3></div>
                    </div>
                    </div>
            </div>
         );
    } 
    if (this.props.large){
        return ( 
            <div className = 'box-inline3'>
                    <div className='box-container2'>
                    <div className = 'macbook'><img src = {label} alt = 'label'></img><img className = 'mac2' src = {mac} alt = 'mac'></img></div>
                    <div className='right2'>
                    <h3 className = 'product2'>Apple Macbook Pro</h3>
                    <div className='textarea'>
                    <img src = {rate} alt = 'rating'></img>
                    <span className='reviews'>20 reviews</span>
                    <a href="#">Submit a review</a>
                    </div>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div><h3>$499<span> $599</span></h3></div>
                    <div className = 'buttons'>
                    <Button type = 'primary' label =  'Add to cart' transparent
                    addtocart></Button>
                    <Button label =  'Add to favorites' type = 'primary' transparent
                    smallheart ></Button>
                    </div>
                    </div>
                    </div>
            </div>
         );
    } 
    }
}

export default Thumbnail;