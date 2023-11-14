var hobbies = [
  "swimming",
  "sailing",
  "surfing",
  "free diving",
  "fishing",
  "camping"
];

//log out length of hobbies...
//console.log(hobbies.length);

//add new hobbie to end
hobbies.push("baking");
//console.log(hobbies.length);

//log out 3rd element...
//console.log(hobbies[2]);

//remove last element...
hobbies.pop();
//console.log(hobbies);

//add 2 new elements after 3rd...
hobbies.splice(2, 0, "gardening", "building cars");

//log out array...
//console.log(hobbies);

//remove 1st element...
hobbies.shift();
//console.log(hobbies);

//add a goal to beginning of array...
hobbies.unshift("pilot");
//console.log(hobbies);

//create another array called goals...
var goals = ["runn 10 miles", "build a react app", "learn next.js"];

//create var and combine arrays...
//var allTheThings = hobbies.concat(goals);
var allTheThings = [...hobbies, ...goals];

//console.log(allTheThings);

//choose element in middli `allTheThings` find index...
//console.log(allTheThings.indexOf("runn 10 miles"));

//now remove element...
allTheThings.splice(8, 1);

//console.log(allTheThings);
//jip its gone !

//use map() to add `i cant wait to start` to beginning of each array element...
var plans = allTheThings.map(function (item) {
  return `I cant wait to start ${item} ! `;
});
console.log(plans);
