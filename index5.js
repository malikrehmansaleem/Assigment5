"use strict";
/*Assignment for the week is:
 - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
 - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
 - Write a program that uses a while loop to print the first 25 integers.
 - Write a program that uses a while loop to print the first 10 even numbers.
 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
 - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

//1- Create a function that takes an array, an index, and a value as parameters.
//Inside the function, use the splice method to insert the value at the specified
//index in the array. Return the modified array.
function pam(array:number[], index:number, value:number){
    array.splice(index,0,value)
     return array
}
//var array:number[] = [1,2,3,4,5,6,7]; var index:number = 4;
//var value:number= 12;
var aNewArray:number[] = pam([1,2,3,4,5,6,7],4,12)
    console.log("The Modified Array=",aNewArray, "and length of Modified Array -", aNewArray.length)
//2-Implement a simple shopping cart program using an array.
//Create functions to add items, remove items, and update quantities using the splice method.
//Print the cart's contents after each operation
var array1:string[] = ["fruits","grocery","kids food items","home kitchn items","vegitable"];
let quantity:number[] = [2,3,4,5,6]
function addToCart(array1:string[], quantity:number[]){
   array1.push("Home decorate items")
   quantity.splice(5,0,7)
   console.log(`"${array1}"is items, "${quantity}" number is added`)
   
}
function removeToCart(array1:string[], quantity:number[]){
    array1.pop()
    quantity.pop()
    console.log( `${array1},${quantity}`)
}
function updateQuantity(array1:string[], quantity:number[]){
    array1.splice(3,1,"kids tems")
    quantity.splice(3,1,6)
    console.log( `${array1},${quantity}`)
}

addToCart(array1,quantity)
removeToCart(array1,quantity)
updateQuantity(array1,quantity)
//Write a program that uses a while loop to print the first 25 integers.
let integer:number =0;

while(integer < 25){
    console.log(integer)
   integer++

}
// Write a program that uses a while loop to print the first 10 even numbers.

let index:number = 0;
while(index<=20){
    if(index%2==0){
    console.log(index)
  index++
    }
}

//Create a function that takes a positive integer as parameter and uses a while loop to
//calculate and return the factorial of that number.

function newFactorial(integer: number) {
    let num: number = 1;
    let factorial: number = 1;
    if (integer < 0) {
        return `factorial have a negative number`
    }
    else {
        while (num <= integer) {
            factorial *= num;
         num++
        }
        return factorial
    }

    
}
//newFactorial(4);
console.log(newFactorial(4))

//Write a program having an array of numbers if the number is negative
//it should remove the negative number from the array.



//console.log(aNewArray.length)
function removeNegtiveNumber(aNewArray:number[]){
for(let i = 0; i<aNewArray.length; i++){
    if(aNewArray[i]<0){
    aNewArray.splice(i,1)
}
}
return aNewArray
}
var array:number[]= removeNegtiveNumber( [1,-2,3,-4,6,5]);
console.log(array);


// Create a function that takes an array of numbers as parameter.
//Use a while loop to calculate and return the sum of all the numbers in the array.



function aNewFunction(aNewArray:number[]){
    let i:number = 0;
    let sum:number = 0
    while(i<aNewArray.length){
        sum += aNewArray[i]
            i++
            
        }
        return sum
}

var sum2:number = aNewFunction( [1,2,3,4,5,6]);
console.log(sum2);
*/
// 8 - Implement a program that takes a list of temperatures in Celsius as 
//input from the user. Convert each temperature to Fahrenheit using the 
//formula F = (C * 9/5) + 32 and store the converted temperatures in an array. 
//Use a while loop to perform the conversion for each temperature.
let aListOfCelsius = [35, 25, 27, 48, 30];
let aListOfFahrenheit = [];
let i = 0;
while (i < aListOfCelsius.length) {
    aListOfFahrenheit[i] = (aListOfCelsius[i] * 9 / 5) + 32;
    i++;
}
console.log(aListOfFahrenheit);
/*
let tempInCel:number[] = [33, 65, 72];
let tempInFar:number[] = [];
let index3:number = 0;
while (index3 < tempInCel.length){
    tempInFar[index3] = (tempInCel[index3] * 9/5) + 32 ;
    index3++;
}
console.log(tempInFar);
*/
