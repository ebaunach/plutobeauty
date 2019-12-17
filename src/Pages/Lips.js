import React, {Component} from 'react';
import {lipsDB} from "../Database/lipsDB";

const lipsList = lipsDB;

class Lips extends Component {
    render() {
        return (
            <div className="list">
                <h1> Lips </h1>
                {lipsList.map(info =>
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
export default Lips;