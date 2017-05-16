var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);
var i =0;


///////////////////////////////////////////
// search followers of username provided //
///////////////////////////////////////////


// T.get('followers/ids', { screen_name: 'DishPatani ' },  function (err, data, response) {
  
//   if(err){
//   	console.log("crap");
//   } else{
//   	// console.log(data);
  	
//  //  	for(i=0; i<data.ids.length;i++){
// 	// }

// 	console.log(data);
//   }
// });

//////////////////////////////////////////
// search tweets with provided keywords //
//////////////////////////////////////////

// var params  = { 
// 	q: 'bahubali',
// 	count: 30
// }

// T.get('search/tweets', params, gotData)

// function gotData(err, data, response) {
//   if(err){
//   	console.log("crap");
//   } else{
//   	var tweets = data.statuses;

//   	for(var i=0; i< tweets.length; i++){
//   		console.log(tweets[i].text + "\n\n\n");
//   	}

//   	// console.log(data);

//   }
// }

// setInterval(tweetIt, 1000*20);

// function tweetIt(){

// 	var rn = Math.floor(Math.random()*100);

// 	var tweet = { status: 'Atul bagh re '+ rn + " #twitterbot " };

// 	T.post('statuses/update', tweet, tweeted);

// 	function tweeted(err, data, response) {
// 	  if(err){
// 	  	console.log("crap");
// 	  } else {
// 	  	console.log(data);
// 	  }
// 	}

// }