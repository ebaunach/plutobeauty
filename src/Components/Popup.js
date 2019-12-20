import React from 'react';
import "../Components/popStyle.css";
import CommentForm from "./Comment/CommentForm";
import CommentList from "./Comment/CommentList";

/**
 * Renders the props made in each of the pages & the Comment component that was imported.
 * There was an issue where the Comment component was not functioning, this is most likely because the Popup component is unstable.
 * So far this component renders every instance of a product regardless of which button is being clicked.
 * I would like to fix this, but as I'm typing my laptop is flickering at almost an unreable level,
 * that and the due date is looming
 *
 * TO DO - find a way to have the button only call each product (How??)
 */

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                        <b>Name: {this.props.name}</b>
                        <br/>
                        <b>Brand: {this.props.brand}</b>
                        <br/>
                        <b>Price: {this.props.price} $</b>
                        <br/>
                        <br/>
                </div>
                <div className="comments">
                    <h2>Love it? Hate it? Leave a review!</h2>
                    <CommentForm />
                    <CommentList />
                </div>
                <br />
                <button onClick={this.props.closePopup}>Go back</button>

            </div>//close 'popup'
        ); //close return
    } //close render
} //close class

export default Popup;
