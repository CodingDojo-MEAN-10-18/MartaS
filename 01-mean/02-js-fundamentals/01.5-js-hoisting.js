
// 1
// console.log(hello);                                   
// var hello = 'world';                                 
var hello;
console.log(hello);
var hello = 'world';
//LOGS
//undefiend


// 2
// var needle = 'haystack';
//test();
//function test(){
//	var needle = 'magnet';
//	console.log(needle);
//}
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//LOGS 
//'magnet'


// 3
/* var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan); */
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
var brendan = 'super cool';
//LOGS
//'super cool'
//not - print never gets called


// 4
/* var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
} */
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';    
}
//LOGS
//'chicken'
//'half-chicken'


// 5
/* mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food); */
mean();
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
console.log(food);
//LOGS
//error


// 6
/* console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre); */
console.log(genre);
rewind();
function rewind() {
	genre = "rock";
    console.log(genre);
    var genre = "r&b";
	console.log(genre);
}
console.log(genre);
var genre = "disco";
//LOGS
//undefined - from initial console.log
//rock
//r&b
//disco


// 7
/* dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo); */
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//LOGS
//'san jose'
//'seattle'
//'burbank'
//'san jose'

