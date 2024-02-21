let userName = 'Yazan'
let userID = 202120095
let isGraduate = false

console.log(`Username: ${userName}`)
console.log(`User ID: ${userID}`)
console.log(`Graduate: ${isGraduate}`)


let x = 5
let y = 10
console.log(`X + Y = ${x+y}`)
console.log(`${x} + ${y} = ${x+y}`)

if(isGraduate){
    console.log(`${userName} is a graduate student.`)
}
else{
    console.log(`${userName} is not a graduate student.`)
}

//Ternary operater

let msg = isGraduate? `${userName} is a graduate student.`: `${userName} is not a graduate student.`

console.log(msg)

let num1 = 10;
let num2 = 20;
let num3  = 5;

if(num1 > num2 && num1 > num3){
    console.log(`Greatest Number: ${num1}`)
}
else if(num2 > num1 && num2 > num3){
    console.log(`Greatest Number: ${num2}`)
}
else{
    console.log(`Greatest Number: ${num3}`)
}

