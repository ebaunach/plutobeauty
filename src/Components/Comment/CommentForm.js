import React from "react";
import Firebase from "../Firebase";
import "../Comment/CommentStyle.css";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            comment: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    formatTime() {
        const options = {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        };
        let now = new Date().toLocaleString("en-US", options);
        return now;
    }

    escapeHTML(html) {
        // [1]
        const div = document.createElement("div");
        div.textContent = html;
        return div.innerHTML;
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.escapeHTML(this.state.username),
            comment: this.escapeHTML(this.state.comment),
            time: this.formatTime()
        };

        const db = Firebase.database().ref("comments");
        db.push(user);

        this.setState({
            username: "",
            comment: ""
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="comments-form">
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <input
                                name="username"
                                type="text"
                                placeholder="Name"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                            />
                        </li>
                        <li>
              <textarea
                  name="comment"
                  placeholder="Comment"
                  value={this.state.comment}
                  onChange={this.handleChange}
                  required
              />
                        </li>
                        <li>
                            <input type="submit" value="Post" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default CommentForm;
