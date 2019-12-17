import React, {Component} from 'react';
import {eyeshadowDB} from "../Database/eyeshadowDB";

const eyesList = eyeshadowDB;

class Eyes extends Component {
    render() {
        return (
            <div className="list">
                <h1> Eyeshadows </h1>
                {eyesList.map(info =>
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
export default Eyes;