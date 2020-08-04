import React from 'react';
import CommentItem from '../CommentItem';
import SlidingPane from 'react-sliding-pane';

import 'react-sliding-pane/dist/react-sliding-pane.css';
import './style.css';

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: this.props.viewing,
    };
  }
  render() {
    return (
      <SlidingPane
        isOpen={this.state.opened}
        onRequestClose={() => {
          this.setState(
            {
              opened: false,
            },
            () => {
              setTimeout(() => {
                this.props.closeComments();
              }, 500);
            }
          );
        }}
      >
        <div className="comments-section">
          <h5 className="comments-heading">Comments</h5>
          <div className="comments-container">
            {this.props.commentIds &&
              this.props.commentIds.map((commentId) => (
                <CommentItem
                  commentId={commentId}
                  key={commentId}
                  isChildComment={false}
                />
              ))}
            {!this.props.commentIds && (
              <div className="empty-commentbox">
                <p>Seems like this commentbox is empty :(</p>
              </div>
            )}
          </div>
        </div>
      </SlidingPane>
    );
  }
}
export default CommentsList;
