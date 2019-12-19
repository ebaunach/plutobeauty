import React, {Component} from 'react';
import {foundationDB} from "../Database/foundationDB";
import Popup from "../Components/Popup";

//create instance of the product List
const foundationList = foundationDB;

class Foundation extends Component {
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
                <h1> Foundation </h1>
                {foundationList.map(info => (
                    <div class="card" key={info.id}>
                        <img src={info.image_link} />
                        <br />
                        <div class="info">
                            <b>Product:</b> {info.name}
                            <br />
                            <b>Price:</b>
                            {info.price_sign} {info.price}
                            <a href={info.product_link} />
                            <br />
                            <button onClick={this.togglePopup.bind(this)}> More info </button>
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
                                <br/>
                        </div>
                    </div>
                ))}
            </div>
            //</Style>
        );
    }
}
export default Foundation;


