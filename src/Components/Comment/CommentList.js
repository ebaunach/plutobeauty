import React from "react";
import Firebase from "../Firebase";
import "../Comment/CommentStyle.css";

class CommentList extends React.Component {
    state = { comments: [] };
    componentWillMount() { // [2]
        const db = Firebase.database().ref("comments");
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
        const db = Firebase.database().ref("comments");

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

export default CommentList;
