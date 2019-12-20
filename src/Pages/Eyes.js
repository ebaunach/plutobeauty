import React, {Component} from 'react';
import Popup from "../Components/Popup";
import {eyeshadowDB} from "../Database/eyeshadowDB";

//create instance of the product List
const eyesList = eyeshadowDB;

class Eyes extends Component {
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

    //List = Use map() & states to get information to show
    // Pop Up button = use map() & states to have a reference for items to show
    render() {
        return (
            <div className="list">
                <h1> Eyes </h1>
                {eyesList.map(info =>
                    <div className="card" key={info.id}>
                        <img src={info.image_link}/>
                        <br/>
                        <div className="info">
                            <b>Product:</b> {info.name}
                            <br/>
                            <b>Price:</b>
                            {info.price_sign} {info.price}
                            <a href={info.product_link}/>
                            <br/>
                            <button onClick={this.togglePopup.bind(this)}> More info</button>
                            {this.state.showPopup ?
                                <Popup
                                    name={info.name}
                                    brand={info.brand}
                                    price={info.price}
                                    image_link={info.image_link}
                                    closePopup={this.togglePopup.bind(this)}
                                />
                                : null}
                            <br/>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
export default Eyes;