import React from 'react';
import ItemInfo from '../ItemInfo';
import { getTimeInterval } from '../../utils/timeMapper';
import { getItem } from '../../service/HNapi';
import ReactHTMLParser from 'react-html-parser';
import SkeletonComment from '../SkeletonComment';

import user from '../../images/user.png';
import clock from '../../images/clock.png';
import './style.css';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    this.setState(
      {
        item: await getItem(this.props.commentId),
        loading: false,
      },
      () => {
        this.setState(
          {
            commentHeight: this.commentWrapper.clientHeight,
          },
          () => {
            this.barStyle = {
              height: 'calc(100% - ' + this.state.commentHeight + 'px)',
            };
            console.log(this.barStyle);
          }
        );
      }
    );
  }

  render() {
    return this.state.loading ? (
      <SkeletonComment />
    ) : (
      <div
        className={`comment-item ${this.props.isChildComment ? 'reply' : ''}`}
      >
        <div
          className="comment-wrapper"
          ref={(commentWrapper) => {
            this.commentWrapper = commentWrapper;
          }}
        >
          <div className="commment-info">
            <div className="user-info">
              <ItemInfo icon={user} iconName="user" text={this.state.item.by} />
            </div>
            <div className="commented-time">
              <ItemInfo
                icon={clock}
                iconName="clock"
                text={getTimeInterval(this.state.item.time)}
              />
            </div>
          </div>
          <div className="comment-text">
            {ReactHTMLParser(this.state.item.text)}
          </div>
          {this.state.item.kids && (
            <div className="parentcomment-bar" style={this.barStyle}></div>
          )}
          {this.state.item.kids && this.state.item.kids.length > 0 && (
            <div className="replies">
              {this.state.item.kids.map((reply) => (
                <CommentItem
                  commentId={reply}
                  key={reply}
                  isChildComment={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default CommentItem;
