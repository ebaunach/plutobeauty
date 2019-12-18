import React, {Component} from 'react';
import './Popup.css'

class Popup extends Component{
    render() {

        return(
            <style>
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1> {this.props.text}</h1>
                    <button onClick={this.props.closePopup}> Beam me up Scotty </button>
                </div>
            </div>
        </style>
        )

    }
}

export default Popup;