var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var myData = require('./server-assets/myData.js');

app.use(bodyParser());

app.route('/family')
	.get(function(req, res){
	  var myFamily = myData.getFamily();
	  res.send({family: myFamily});
	})
	.post(function(req, res){
	  var myFamily = myData.getFamily();
	  myData.addFamily(req.body);
	  res.send({family: myFamily});
	})


app.route('/friends')
	.get(function(req, res){
	  var myFriends = myData.getFriends();
	  res.send({friends: myFriends});
	})
	.post(function(req, res){
	  var myFriends = myData.getFriends();
	  myData.addFriend(req.body);
	  res.send({friends: myFriends});
	})

app.route('/favorite')
	.get(function(req, res){
	  var myFavorite = myData.getFavorite();
	  res.send({favorite: myFavorite});
	})
	.post(function(req, res){
	  var myFavorite = myData.getFavorite();
	  myData.addFavorite(req.body);
	  res.send({favorite: myFavorite});
	})

app.route('/about')
	.get(function(req, res){
	  var aboutMe = myData.getMe();
	  res.send({about: aboutMe});
	})
	.post(function(req, res){
	  var aboutMe = myData.getMe();
	  myData.addMe(req.body);
	  res.send({about: aboutMe});
	})

app.listen(9000);


// app.get('/friends', function(req, res){
//   var myFriends = myData.getFriends();
//   res.send({friends: myFriends});
// });

