import React, {Component} from 'react';
import {browsDB} from "../Database/browsDB";
import Popup from "../Components/Popup";

//create instance of the product List
const browsList = browsDB;

class Brows extends Component {
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
                <h1> Brows </h1>
                {browsList.map(info =>
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
export default Brows;