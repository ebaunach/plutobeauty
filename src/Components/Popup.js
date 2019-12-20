import React from 'react';
import CommentForm from "./Comment/CommentForm";
import CommentList from "./Comment/CommentList";
import "../Components/popStyle.css";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
            <img source= {this.props.image_link} />  

            <table>
                <tr>
                   <b> <th>Name</th><th>Brand</th><th>Price</th><th>Description</th></b>
                </tr>
                      <tr><td>{this.props.name}</td>
                        <td>{this.props.brand}</td>
                        <td>{this.props.price} $</td></tr>
                        </table>
                    <button onClick={this.props.closePopup}>Go back</button>
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
