import React from 'react';
import revStyle.css;


const firebaseConfig = {
    apiKey: "AIzaSyDp61_EFLlrABIxTtdAYODk5jqWYkCt9Qw",
    authDomain: "pluto-beauty.firebaseapp.com",
    databaseURL: "https://pluto-beauty.firebaseio.com",
    projectId: "pluto-beauty",
    storageBucket: "pluto-beauty.appspot.com",
    messagingSenderId: "718258830394",
    appId: "1:718258830394:web:9e0084cc5e2aa557b4c903",
    measurementId: "G-XCT0LY3WS8"
};
//TO DO - find a way to get Firebase to work
firebase.initializeApp(config);


class Review extends React.Component {
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

        const db = firebase.database().ref("comments");
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

class CommentList extends React.Component {
    state = { comments: [] };
    componentWillMount() { // [2]
        const db = firebase.database().ref("comments");
        const MAX_COUNT = 9;
        db.on("value", snapshot => {
            if (snapshot.numChildren() > MAX_COUNT) {
                let childCount = 0;
                let updates = {};
                snapshot.forEach(child => {
                    if (++childCount < snapshot.numChildren() - MAX_COUNT) {
                        updates[child.key] = null;
                    }
                });
                db.update(updates);
            }
        });
    }
    componentDidMount() {
        const db = firebase.database().ref("comments");

        db.on("value", snapshot => {
            const comments = snapshot.val();
            const arr = [];
            for (const comment in comments) {
                arr.push({
                    username: comments[comment].username,
                    comment: comments[comment].comment,
                    time: comments[comment].time
                });
            }

            this.setState({
                comments: arr.reverse()
            });
        });
    }
    render() {
        return (
            <div className="comments-list">
                {this.state.comments.map(comment => (
                    <Comment
                        username={comment.username}
                        comment={comment.comment}
                        time={comment.time}
                    />
                ))}
            </div>
        //const mountNode = document.getElementById("app")
        );
    }
}

const Comment = ({ username, comment, time }) => (
    <div className="comment">
        <h4>{username} says</h4>
        <p className="timestamp">{time}</p>
        <p>{comment}</p>
    </div>
);



