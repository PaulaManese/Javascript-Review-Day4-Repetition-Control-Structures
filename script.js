console.log ("connected");
//For Loop
// - repeats a block of code as long as certain condition is met.
// - used to execute a block of code for a certain number of times.

/**Syntax
 * parameters
 for (initialization; condition; increment)
 {
    //line of code
 }

 initialization - initialize the counter variables and EVALUATED ONCE unconditionally before the first execution of the loop body

 condition - EVALUATED AT THE BEGINNING of each iteration (loop)
 - if true, the loop statement will execute
 - if false, execution of the loop ends

 increment - updates the loop counter with a new value each time the loop runs
 */
let i = 0;
for (i; i <= 5; i++){
    console.log (`This is number ${i}`);
}

let herName = "Lady Ada Augusta Byron King";
console.log (herName.length);
//index
 //position of the character in a string
 //zero base
console.log (herName[6]);
console.log (herName[11]);

let letter = 0;
for (letter; letter < herName.length; letter++) {
    console.log(herName[letter]);
}

let fruits = ["mango", "apple", "orange", "singkamas"];
fruits[4] = "banana";
fruits [5] = "strawberry";
console.log (fruits.length);

let index = 0;
for (index; index < fruits.length; index++)
{
    console.log (fruits[index]);
}

let cars = [
    {brand: "Tesla", type:"Electric"},
    {brand: "Ferrari", type:"Sports"},
    {brand: "Lamborghini", type:"Sports"}
];

let x = 0;
for (x; x < cars.length; x++)
{
    console.log (cars[x]);
    console.log(cars[x].brand);
    console.log(cars[x].type);
}

//While Loop - 

//Syntax: 
/**
 while (conditon)
 {
    //statement
 }
 */

// let count = 10;
// while (count > 0)
// {
   
//     count--;
//     console.log(count);
// }

// let j = 1;
// while (j < 10)
// {
//  console.log (j);
//  j++;
// }

// //SOLUTION 1
// let b = 20;
// for (b; b >= 0; b--) {
//     if (b % 2 === 0) {
//         console.log (`number: ${b}`);
//     }
// }

// //SOLUTON 2
// let userInput = prompt ("Enter a number from 0 to 20");
// function counting (b) {
//     for (b; b >= 0; b--)
//     {
//         if (b % 2 === 0){
//             console.log (b);
//         }
//     }
// }

// counting (userInput);

//Do-while Loop
// same as while loop but 
//- condition is checked at the end of each iteration (loop) RATHER THAN at the beginning before the loop runs

//code is guaranteed to run at least once even if the condition expression already evaluates to true.

/**
 Syntax:
 do {
    //statement
 }

 while (condition)
 */
let k =1;
 do {
    
    console.log (k);
    k--;
 }
 while (k > 10)
