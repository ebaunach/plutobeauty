import React, {Component} from 'react';
import {blushDB} from "../Database/blushDB";

const blushList = blushDB;

class Blush extends Component {
    render() {
        return (
            <div className="list">
                <h1> Blush </h1>
                {blushList.map(info =>
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
export default Blush;