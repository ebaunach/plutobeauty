import React, {Component} from 'react';
import {foundationDB} from "../Database/foundationDB";

//import styled from 'styled-components';

/**const Style = styled.Style`
  width: 100%;
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 60px;
  background: #f8f8f8;

      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
`;
 **/


const foundationList = foundationDB;

class Foundation extends Component {
    render() {
        return (
            //<Style>
                <div className="list">
                    <h1> Foundation </h1>
                    {foundationList.map(info =>
                        <div key={info.id}>
                            <b>Product:</b> {info.name},

                            <img src = {info.image_link} />
                            <b>Price:</b> {info.price}, {info.price_sign},
                            <a href = {info.product_link}></a>
                        </div>
                    )
                    }
                </div>
            //</Style>
        );
    }
}
export default Foundation;
