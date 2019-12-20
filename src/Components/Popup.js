import React from 'react';
import "../Components/popStyle.css";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    {this.props.brand}
                    <br />
                    {this.props.name}
                    <br />
                    {this.props.price} {this.props.price_sign}
                    <br />
                    <button>Review it!</button>
                    <br />
                    <button>//Star Rating goes here</button>
                     <br />
                    <button onClick={this.props.closePopup}>Go back</button>
                </div>

            </div> //close 'popup'

        ); //close return
    } //close render
} //close class

export default Popup;