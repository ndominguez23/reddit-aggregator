import React from 'react';
import { useDispatch } from 'react-redux';
import FeedItem from './FeedItem.jsx';
import * as actions from '../actions/actions.js';

const fetchAndParseFeedItems = (id, url) => dispatch => fetch(`${url}new/.json?limit=10`)
  .then(data => data.json())
  .then(json => json.data.children)
  .then(rawFeedItems => rawFeedItems.map(item => item.data))
  .then(processedFeedItems => dispatch(actions.updateFeedItems(id, processedFeedItems)));

const Feed = (props) => {
  const dispatch = useDispatch();

  const { feedItems, subName, subUrl, id } = props;
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
      <p>{subUrl}</p>
      <input
        id="update-feed"
        type="button"
        value="Get Feed"
        onClick={() => dispatch(fetchAndParseFeedItems(id, subUrl))}
      />
      <div className="feed-items-container">
        {/* {feedItemArr} */}
      </div>
    </div>
  );
};

export default Feed;
