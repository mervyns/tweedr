/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  const newTweet = (tweet, callback) => {
    // set up query
    const queryString = "INSERT INTO tweets (user_id, content) VALUES ($1, $2)";
    const values = [tweet.userid, tweet.tweet];

    // execute query
    dbPoolInstance.query(queryString, values, (error, queryResult) => {
      // invoke callback function with results after query has executed
      callback(error, queryResult);
    });
  };

  const showAllTweets = (tweet, callback) => {
      const queryString = "SELECT * from tweets";

      dbPoolInstance.query(queryString, (err, queryResult) => {
          callback(err, queryResult);
      });
  };

  const showFollowingTweets = (tweet, callback) => {
      const queryString = "SELECT * FROM tweets INNER JOIN followers ON (followers.user_id = tweets.user_id) WHERE followers.follower_user_id='"+tweet.user_id+"'";

      dbPoolInstance.query(queryString, (err, queryResult) => {
          callback(err, queryResult);
      })
  }

  const showFollowerTweets = (tweet, callback) => {
      const queryString = "SELECT * FROM tweets INNER JOIN followers ON (followers.follower_user_id = tweets.user_id) WHERE followers.user_id='"+tweet.user_id+"'";

      dbPoolInstance.query(queryString, (err, queryResult) => {
          callback(err, queryResult);
      })
  }

  return {
    newTweet,
    showAllTweets,
    showFollowingTweets,
    showFollowerTweets
  };
};
