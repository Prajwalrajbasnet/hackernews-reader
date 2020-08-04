import React from 'react';
import CommentsList from '../CommentsList';
// import { Switch, Link, Route } from 'react-router-dom';
import './style.css';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewing: false,
    };
    this.openComments = this.openComments.bind(this);
    this.closeComments = this.closeComments.bind(this);
  }
  openComments() {
    this.setState({
      viewing: true,
    });
  }

  closeComments() {
    this.setState({
      viewing: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.viewing && (
          <CommentsList
            commentIds={this.props.commentIds}
            viewing={this.state.viewing}
            closeComments={this.closeComments}
          />
        )}
        {/* /* <Switch>
          <Route path="/" component={StoriesList} exact></Route>
          <Route
            path={`/story/${this.props.storyId}/comments`}
            component={RandomComp}
          ></Route>
        </Switch> */
        /* <Link to={`/story/${this.props.storyId}/comments`}> */}
        <button
          className="comment-btn"
          title="comments"
          onClick={this.openComments}
        >
          <img
            src={this.props.icon}
            className="comment-icon"
            alt="comment"
          ></img>
          <span className="total-comments">{this.props.count}</span>
        </button>
        {/* /* </Link> */}
      </React.Fragment>
    );
  }
}
export default Comments;
