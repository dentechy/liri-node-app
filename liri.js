//Needs to read the keys from the keys.js file
//functions required: my-tweets, spotify-this-song, movie-this, do-what-it-says
//spotify won't work due to a change in their api

const fs = require('fs');
const keys = require('./keys.js');
const twitter = require('twitter');

var userInput = process.argv[2];
var movieInput = process.argv[3]

var client = new twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

if (userInput === 'my-tweets') {
var params = {screen_name: 'nodetweety'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (i = 0; i < tweets.length; i++) {
      console.log(tweets[i].created_at + ": " + tweets[i].text);
    }
    for (i = 0; i < tweets.length; i++) {
      var tweeted = tweets[i].created_at + ": " + tweets[i].text + "\n";
      fs.appendFile('random.txt', tweeted);
    }
  } 
});
}

else if (userInput === 'movie-this') {

}
