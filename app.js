/*
create two variables and two constants. two should be a number. one should be a 
string that is at least 5 characters and the last should be a boolean.
*/

const num1 = 9;
let num2 = 5;
const word = 'constant';
let check = true;

/*
create an if conditional that compares the two numbers. check to see if they 
match and are the same type. If they match write to the console "they match" if 
they don't match write to the console "no luck".
Test your if conditional to make sure that both conditions will happen provided 
the appropriate comparison
*/

if (num1 === num2) {
    console.log('they match');
} else {
    console.log('no luck');
}

/*
write a for loop to loop over the elements of your string, console.log one 
character at a time.
*/

for(i=0;i<word.length;i++) {
    console.log(word.charAt(i));
}

