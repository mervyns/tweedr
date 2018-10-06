var React = require("react");

class showTweets extends React.Component {
  render() {
    console.log(this.props.tweets);
    const tweets = this.props.tweets.rows;
    const mapTweets = tweets.map(tweet => {
      return (
        <div>
          <li>
            Tweet ID : {tweet.tweet_id} Content : {tweet.content} Posted By : {tweet.user_id}
          </li>
        </div>
      );
    });
    return (
      <html>
        <head />
        <body>{mapTweets}</body>
      </html>
    );
  }
}

module.exports = showTweets;