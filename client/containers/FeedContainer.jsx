/* eslint-disable react/prefer-stateless-function */
/* eslint-disable func-names */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from '../components/Feed.jsx';
import * as actions from '../actions/actions.js';

const mapStateToProps = store => ({
  // subList: store.feed.subList,
  subreddit: store.feed.subreddit,
});

const fetchAndParseFeedItems = (id, url) => function (dispatch) {
  return fetch(`${url}new/.json?limit=10`)
    .then(data => data.json())
    .then(json => json.data.children)
    .then(rawFeedItems => rawFeedItems.map(item => item.data))
    .then(processedFeedItems => dispatch(actions.updateFeedItems(id, processedFeedItems)));
};

const mapDispatchToProps = dispatch => ({
  addSubreddit: () => dispatch(actions.addSubreddit()),
  setSubName: name => dispatch(actions.setSubredditName(name)),
  updateFeedItems: (id, url) => dispatch(fetchAndParseFeedItems(id, url)),
});

class FeedContainer extends Component {
  render() {
    const feedArr = [];
    for (let i = 0; i < this.props.subList.length; i++) {
      feedArr.push(<Feed
        updateFeedItems={this.props.updateFeedItems}
        subName={this.props.subList[i].name}
        subUrl={this.props.subList[i].url}
        feedItems={this.props.subList[i].feedList}
        key={i}
        id={i}
      />);
    }

    return (
      <div className="feed-container">
        <div className="input-box">
          <input
            type="text"
            value={this.props.subreddit}
            placeholder="r/example"
            onChange={e => this.props.setSubName(e.target.value)}
          />
          <div className="button-box">
            <input id="add-sub" type="button" value="Add Sub" onClick={this.props.addSubreddit} />
          </div>
        </div>
        <div className="feeds-display">
          {feedArr}
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
