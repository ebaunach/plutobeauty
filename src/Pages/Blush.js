import React, {Component} from 'react';
import {blushDB} from "../Database/blushDB";
import Popup from "../Components/Popup";

//create instance of the product List
const blushList = blushDB;

class Blush extends Component {
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
                <h1> Blush </h1>
                {blushList.map(info =>
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
            //</Style>
        );
    }
}
export default Blush;