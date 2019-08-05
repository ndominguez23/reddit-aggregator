import React from 'react';

const FeedItem = props => (
  <div className="feed-item">
    <h5 className="feed-item-title">{props.title}</h5>
    <p className="feed-item-text">{props.text}</p>
  </div>
);

export default FeedItem;
