import React from 'react';
import FeedItem from './FeedItem.jsx';

const Feed = ({ updateFeedItems, subName, subUrl, feedItems, id }) => {
  const feedItemArr = [];
  // console.log(`feedItems length is ${JSON.stringify(feedItems)}`)
  for (let i = 0; i < feedItems.length; i++) {
    feedItemArr.push(<FeedItem
      title={feedItems[i].title}
      text={feedItems[i].selftext}
      key={i}
    />);
  }

  return (
    <div className="feed">
      <h3>{subName}</h3>
      {/* <p>{subUrl}</p> */}
      <input id="update-feed" type="button" value="Get Feed" onClick={() => updateFeedItems(id, subUrl)} />
      <div className="feed-items-container">
        {feedItemArr}
      </div>
    </div>
  );
};

export default Feed;
