/*Given an array X, write a program that would find the maximum value of the array.
 Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

6. 5. Find Max*/
const x=[ 2, -3,-1 ]
let max= x[0]
for(let index= 0; index <= x.length; index++){
if(x[index] > max){
    max= x[index]
}
}
console.log(max)