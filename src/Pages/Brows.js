import React, {Component} from 'react';
import {browsDB} from "../Database/browsDB";

const browsList = browsDB;

class Brows extends Component {
    render() {
        return (
            <div className="list">
                <h1> Brows </h1>
                {browsList.map(info =>
                    <div key={info.id}>
                        <b>Product:</b> {info.name},
                        <img src = {info.image_link} />
                        <b>Price:</b> {info.price}, {info.price_sign},
                        <a href = {info.product_link}></a>
                    </div>
                )
                }
            </div>
        );
    }
}
export default Brows;