import React from 'react';
import "../Components/popStyle.css";
//import "./Review";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
            <img source= {this.props.image_link} />  
<table>

    <tr>
<th>Name</th><th>Brand</th><th>Price</th><th>Description</th>
</tr>


    
                      <tr> <td>{this.props.name}</td>
                        <td>{this.props.brand}</td>
                        <td>{this.props.price}</td>
                        <td>{this.props.description}</td>
                        </tr>
                        
                        </table>
                    <button onClick={this.props.closePopup}>Go back</button>
               
                </div>

                /** TO DO - ADD COMMENT COMPONENT + STAR RATING**/
                <div className='comment'>
                    /***Add review.js component here*/
                </div>
            </div> //close 'popup'
        ); //close return
    } //close render
} //close class

export default Popup;
