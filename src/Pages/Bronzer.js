import React, {Component} from 'react';
import {bronzerDB} from "../Database/bronzerDB";

const bronzerList =bronzerDB;

class Bronzer extends Component {
    render() {
        return (
            <div className="list">
                <h1> Bronzer </h1>
                {bronzerList.map(info =>
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
export default Bronzer;