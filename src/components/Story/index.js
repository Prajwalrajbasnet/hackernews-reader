import React from 'react';
import { getItem } from '../../service/HNapi';
import ItemInfo from '../ItemInfo';
import Comments from '../Comments';
import SkeletonStory from '../SkeletonStory';
import { getTimeInterval } from '../../utils/timeMapper';
import { getDomainName, getDomainLink } from '../../utils/urlFormatter';
import { createUserProfileURL } from '../../utils/createUserProfileURL';
import withHyperLink from '../../hoc/withHyperLink';

import uparrow from '../../images/arrow-up.png';
import clock from '../../images/clock.png';
import website from '../../images/website.png';
import user from '../../images/user.png';
import comment from '../../images/comments.png';
import './style.css';

const ItemInfoWithHyperLink = withHyperLink(ItemInfo);

class Story extends React.Component {
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
    this.setState({
      item: await getItem(this.props.storyId),
      loading: false,
    });
  }

  render() {
    return this.state.loading ? (
      <SkeletonStory />
    ) : (
      <li className="story">
        <div className="upvote">
          <ItemInfo
            icon={uparrow}
            iconName="up arrow"
            text={this.state.item.score}
          />
        </div>
        <div className="title-wrapper">
          <a
            className="story-title"
            href={this.state.item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.item.title}
          </a>
        </div>
        <div className="source-info">
          <div className="first-item">
            <ItemInfo
              icon={clock}
              iconName="time"
              text={getTimeInterval(this.state.item.time)}
            />
          </div>
          <div className="second-item">
            <ItemInfoWithHyperLink
              icon={website}
              iconName="website"
              text={getDomainName(this.state.item.url)}
              link={getDomainLink(this.state.item.url)}
              title="webpage"
            />
          </div>
        </div>
        <div className="post-info">
          <div className="first-item">
            <ItemInfoWithHyperLink
              icon={user}
              iconName="user"
              text={this.state.item.by}
              link={createUserProfileURL(this.state.item.by)}
              title="profile"
            />
          </div>
          <div className="second-item">
            <Comments
              icon={comment}
              count={this.state.item.descendants}
              commentIds={this.state.item.kids}
              storyId={this.state.item.id}
            />
          </div>
        </div>
      </li>
    );
  }
}
export default Story;
