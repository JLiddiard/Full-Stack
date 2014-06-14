var myFamily = [
	{
		name: 'Dad',
		age: 70,
		relationship: 'Father'
	},
	{
		name: 'Mom',
		age: 66,
		relationship: 'Mother'
	},
	{
		name: 'Karen',
		age: 45,
		relationship: 'Sister'
	},
	{
		name: 'Vince',
		age: 44,
		relationship: 'Brother'
	},
	{
		name: 'Steven',
		age: 41,
		relationship: 'Brother'
	},
	{
		name: 'Matt',
		age: 24,
		relationship: 'Brother'
	},
	{
		name: 'Merrilee',
		age: 35,
		relationship: 'Wife'
	},
	{
		name: 'Atticus',
		age: 8,
		relationship: 'Son'
	},
	{
		name: 'Oliver',
		age: 8,
		relationship: 'Son'
	},
	{
		name: 'Amelia',
		age: 8,
		relationship: 'Daughter'
	}
];

var myFriends = [
	{
		name: 'Eric',
		age: 38,
		firstmet: '1992'
	},
	{
		name: 'Robert',
		age: 37,
		firstmet: '2008'
	},
	{
		name: 'Mike',
		age: 39,
		firstmet: '1992'
	},
	{
		name: 'Kenny',
		age: 35,
		firstmet: '2008'
	}
];

var myFavorite = ['Acting', 'Directing', 'Programming', 'Chess', 'Fishing', 'Hiking', 'Playing with my kids', 'Movies'];

var objMe = {
	name: 'Jon Liddiard',
	height: '6ft',
	age: '38',
	movie: 'Contact',
	artist: 'Low',
	food: 'Pasta'
};

//this function allows server.js to 'GET' data in myFamily array
module.exports.getFamily = function(){
  return myFamily;
};

//this function allows server.js to 'PUSH' data into myFamily array
module.exports.addFamily = function(newFamily){
  myFamily.push(newFamily);
};

//this function allows server.js to 'GET' data in myFriends array
module.exports.getFriends = function(){
  return myFriends;
};

//this function allows server.js to 'PUSH' data into myFriends array
module.exports.addFriend = function(newFriend){
  myFriends.push(newFriend);
};

//this function allows server.js to 'GET' data in myFavorite array
module.exports.getFavorite = function(){
  return myFavorite;
};

//this function allows server.js to 'PUSH' data into myFavorite array
module.exports.addFavorite = function(newFavorite){
  myFavorite.push(newFavorite);
};

//this function allows server.js to 'GET' data in objMe array
module.exports.getMe = function(){
  return objMe;
};

//this function allows server.js to 'PUSH' data into objMe array
module.exports.addMe = function(newMe){
  for (var key in newMe){
  	objMe[key] = newMe[key];
  };
};

// module.exports.delMe = function (deleteMe){
//   var toDelete = [deleteMe];
//   for (var i = 0, i < toDelete.length; i++){
//   	delete objMe.toDelete[i];
//   };
// };


