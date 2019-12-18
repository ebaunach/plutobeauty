import React, {Component} from 'react';
import {blushDB} from "../Database/blushDB";
import Popup from "../Components/Popup";

//create instance of the product List
const blushList = blushDB;

class Blush extends Component {
    //constructor to hold states for the pop up button
    constructor(props) {
        super(props);
        this.state = {showPopup: false}; //default state of popup
    }
    togglePopup(){
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className="list">
                <h1> Blush </h1>
                {blushList.map(info =>
                    <div key={info.id}>
                        <ul>
                            <li>{info.brand}</li>
                            <li>{info.name} </li>
                            <li><img src = {info.image_link} /> </li>
                            <li>${info.price}  </li>

                        </ul>
                        <button onClick={this.togglePopup.bind(this)}> More info </button>
                        {this.state.showPopup?
                            <Popup
                                text='Click "Beam me up Scotty" to hide popup'
                                closePopup = {this.togglePopup.bind(this)}
                            />
                            : null}
                    </div>
                )}
            </div>
        );
    }
}
export default Blush;