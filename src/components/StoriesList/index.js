import React from 'react';
import { fetchStoryIds } from '../../service/HNapi';
import Story from '../Story';

import './style.css';

class StoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyIds: [],
      visibleCount: 25,
    };
    this.increaseVisibleCount = this.increaseVisibleCount.bind(this);
  }

  increaseVisibleCount() {
    if (this.state.visibleCount < 500) {
      this.setState({
        visibleCount: this.state.visibleCount + 25,
      });
    }
  }

  async componentDidMount() {
    this.setState({
      storyIds: await fetchStoryIds(),
    });
  }

  render() {
    return (
      <div>
        <ul className="story-list">
          {this.state.storyIds
            .slice(0, this.state.visibleCount)
            .map((storyid) => (
              <Story key={storyid} storyId={storyid} />
            ))}
        </ul>
        <div className="load-more">
          <button onClick={this.increaseVisibleCount} className="more-btn">
            Load More..
          </button>
        </div>
      </div>
    );
  }
}
export default StoriesList;
