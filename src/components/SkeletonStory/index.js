import React from 'react';
import Skeleton from 'react-loading-skeleton';

function SkeletonStory() {
  return (
    <li>
      <div className="upvote">
        <Skeleton circle={true} height={40} width={40} />
      </div>
      <div className="title-wrapper">
        <a className="story-title">
          <Skeleton width={`75%`} />
        </a>
      </div>
      <div className="source-info">
        <div className="first-item">
          <Skeleton width={150} height={30} />
        </div>
        <div className="second-item">
          <Skeleton width={150} height={30} />
        </div>
      </div>
      <div className="post-info">
        <div className="first-item">
          <Skeleton width={150} height={30} />
        </div>
        <div className="second-item">
          <Skeleton width={150} height={30} />
        </div>
      </div>
    </li>
  );
}
export default SkeletonStory;
