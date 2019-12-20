import React from 'react';
import "../Components/popStyle.css";
import CommentList from "./Comment/CommentList";
import CommentForm from "./Comment/CommentForm";


class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                   <b>{this.props.brand}</b>
                    <br />
                    <b> {this.props.name}</b>
                    <br />

                   <b> {this.props.price} $</b>
                    <br />
                    <br />
                    <div className="comments">
                        <h2>Love it? Hate it? Leave a review!</h2>
                        <CommentForm />
                        <CommentList />
                    </div>
                    <br />
                    <button onClick={this.props.closePopup}>Go back</button>

                </div>
            </div> //close 'popup'
        ); //close return
    } //close render
} //close class

export default Popup;