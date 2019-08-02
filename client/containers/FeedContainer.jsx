import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Feed from '../components/Feed.jsx';
import * as actions from '../actions/actions.js';
// import store from '../store';


const addSubToUser = (user, subName, subList) => dispatch => fetch('/api/addSub', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ username: user, subName, subList }),
})
  // .then(data => console.log(data));
  .then(data => data.json())
  .then(subreddits => subreddits.map(sub => ({ name: sub.name, url: sub.url, feedList: [] })))
  .then(subreddits => dispatch(actions.addUserSubs(subreddits)));

const FeedContainer = () => {
  const user = useSelector(store => store.feed.user);
  console.log(`user is ${user}`);
  const subreddit = useSelector(store => store.feed.subreddit);
  const subList = useSelector(store => store.feed.subList);
  const dispatch = useDispatch();

  const feedArr = [];
  for (let i = 0; i < subList.length; i++) {
    feedArr.push(<Feed
      subName={subList[i].name}
      subUrl={subList[i].url}
      feedItems={subList[i].feedList}
      key={i}
      id={i}
    />);
  }

  return (
    <div className="feed-container">
      <div className="input-box">
        <input
          type="text"
          value={subreddit}
          placeholder="r/example"
          onChange={e => dispatch(actions.setSubredditName(e.target.value))}
        />
        <div className="button-box">
          <input
            id="add-sub"
            type="button"
            value="Add Sub"
            onClick={() => dispatch(addSubToUser(user, subreddit, subList))}
          />
        </div>
      </div>
      <div className="feeds-display">
        {/* {feedArr} */}
      </div>
    </div>
  );
};


// class FeedContainer extends Component {
//   render() {
//     const feedArr = [];
//     // for (let i = 0; i < this.props.subList.length; i++) {
//     //   feedArr.push(<Feed
//     //     updateFeedItems={this.props.updateFeedItems}
//     //     subName={this.props.subList[i].name}
//     //     subUrl={this.props.subList[i].url}
//     //     feedItems={this.props.subList[i].feedList}
//     //     key={i}
//     //     id={i}
//     //   />);
//     // }

//     return (
//       <div className="feed-container">
//         <div className="input-box">
//           <input
//             type="text"
//             value={this.props.subreddit}
//             placeholder="r/example"
//             onChange={e => this.props.setSubName(e.target.value)}
//           />
//           <div className="button-box">
//             <input id="add-sub" type="button" value="Add Sub" onClick={this.props.addSubreddit} />
//           </div>
//         </div>
//         <div className="feeds-display">
//           {feedArr}
//         </div>
//       </div>
//     );
//   }
// }


export default FeedContainer;
