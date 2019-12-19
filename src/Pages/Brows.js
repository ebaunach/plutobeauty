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
        this.togglePopup=this.togglePopup.bind(this); //binds the event
    }
    togglePopup(){
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    //TO DO - FIX PopUp - doesn't give exact product details (need a loop?
    render() {
        return (
            <div className="list">
                <h1> Brows </h1>
                {browsList.map(info =>
                    <div key={info.id}>
                        <ul>
                            <li>{info.brand}</li>
                            <li>{info.name} </li>
                            <li><img src = {info.image_link} /> </li>
                            <li>${info.price}  </li>
                            <li> <button onClick={this.togglePopup.bind(this)}> More info </button></li>
                            <li> <button onClick={this.togglePopup.bind(this)}> More info </button>
                                {this.state.showPopup?
                                    <Popup
                                        name={info.name}
                                        brand={info.brand}
                                        price={info.price}
                                        description={info.description}
                                        image_link={info.image_link}
                                        closePopup = {this.togglePopup.bind(this)}
                                    />
                                    : null}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}
export default Brows;