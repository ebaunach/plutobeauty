import React from 'react';
import "../Components/popStyle.css";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                        {this.props.name}
                        {this.props.brand}
                        {this.props.price}
                        {this.props.description}
                        {this.props.image_link}
                    <button onClick={this.props.closePopup}>Go back</button>
                </div>

                /** TO DO - ADD COMMENT COMPONENT + STAR RATING**/
                <div className='comment'>
                </div>
            </div> //close 'popup'
        ); //close return
    } //close render
} //close class

export default Popup;