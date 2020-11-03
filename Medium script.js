// var name = 'Greg';

// if (name === 'Dylan') {
//     console.log('Hello' + name);
// } else {
//     name = prompt("what is your name?");
//     console.log('Hello' + name);


var Feelings = prompt("How are you today?");
console.log(Feelings);

var Test = 'Normal';
if (Feelings === Feelings.toLowerCase()) {
    Test = 'Whispering';
} else if (Feelings === Feelings.toUpperCase()) {
    Test = 'Yelling';
} else {

}
console.log(Test);

