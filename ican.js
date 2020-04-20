//2 ways to comment piece of code either single line with double forward slash or pair of forward slash with asterik sign.
//Lecture on Variables
/*
var displayName = 'Arvind Kumar Rose';
console.log(displayName);
var age = 40;
var presentAge = false;
console.log(presentAge); */

/*var name = 'Arvind';
var age = 25;

console.log(name + name);
console.log(name + age);
console.log(age + name);
console.log(age + age);

console.log('My name is ' + name + ' and current age is ' + age);*/

//LECTURE ON OPERATORS
//operator precedence - op with highe precedence are executed first.

/*var a,b,c,d;
a = 5+3*2; //11
b = (5+3)*2; //16
console.log(a);
console.log(b);
c=d=14;
console.log(c);
console.log(d);*/

/*// Postfix 
var x = 2;
var y = x++; // y = 3, x = 4
console.log(x);
// Prefix
//var a = 2;
//b = ++a; // a = 3, b = 3 */

//lecture - if/else statement
var name='Arvind';
var age=40;
var isMarried='no';
if(isMarried==='yes'){
    console.log(name + ' is not married');
} else{
    console.log(name + ' will be soon married');
}
console.log('1'===1);
if(23===23)
{console.log('no type coersion');}

var age=prompt('enter age');

if (age >=13 && age <= 19) {
    console.log('teenager');
}
else if(age >= 20 && age <= 30) {
    console.log('young man');
} else if(age<13){
    console.log('below 13');
}else{
    console.log('man');
}


