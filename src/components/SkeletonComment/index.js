import React from 'react';
import Skeleton from 'react-loading-skeleton';

function SkeletonComment() {
  return (
    <div className="comment-item">
      <div className="comment-wrapper">
        <div className="comment-info">
          <div className="user-info">
            <Skeleton width={95} height={30} />
          </div>
          <div className="commented-time">
            <Skeleton width={95} height={30} />
          </div>
          <div className="comment-text">
            <Skeleton height={120} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkeletonComment;
