import React from 'react';

const FeedItem = props => (
  <div className="feed-item">
    <h3 className="feed-item-title">{props.title}</h3>
    <p className="feed-item-text">{props.text}</p>
  </div>
);

export default FeedItem;
