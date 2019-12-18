import React, {Component} from 'react';
import {bronzerDB} from "../Database/bronzerDB";
import Popup from "../Components/Popup";

//create instance of the product List
const bronzerList =bronzerDB;

class Bronzer extends Component {
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
                <h1> Bronzer </h1>
                {bronzerList.map(info =>
                    <div key={info.id}>
                        {info.name}
                        <img src = {info.image_link} />
                        {info.price} $
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
export default Bronzer;