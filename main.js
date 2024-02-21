let user = 'Yazan'
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

console.log('------------------')

let j = 5
while(j >=0){
    console.log(j)
    j--
}
//Arrays
let student = ['Yazan',20212005,'CS']
console.log(`Student Array length: ${student.length}`)

//Add to the last
student.push('3rd Year');
console.log(student)
//Remove last
student.pop()


//forEach loop
console.log('--------------')
const hobbies = ['Football','Video Games','Swimming','Coding'];
hobbies.forEach((hobbie,index)=>{
    console.log(`${index + 1} ${hobbie}`)
})

let newArr = hobbies.map((hobbie)=>{
    return hobbie.toLowerCase()
})
console.log(newArr)

//Task
let numbers = [1,2,3,4,5]
console.log(`Original Array ${numbers}`)
let multipliedNumbers = numbers.map((number)=>{
    return number * 2
})
console.log(`Multiplied Array ${multipliedNumbers}`)

let indexArray = multipliedNumbers.map((num,index)=>{
    return index
})
console.log(`Index of each number ${indexArray}`)

console.log('--------------')
//Objects
let studentObj = {
    userName : "Yazan",
    userId : 202120095,
    isGraduate: false
}
console.log(studentObj)
console.log(studentObj.userName)
console.log(studentObj.userId)
console.log(studentObj.isGraduate)

//Destructering
let {userName, userId} = studentObj
console.log(userName, userId)
console.log('-------------')
//Functions
function greet(name){
    console.log(`Greetings ${name}!`)
}
greet("Yazan")

function sum(x,y){
    return x + y
}
console.log(sum(5,10))

//Lamda function
const mul = function(x,y){
    return x * y
}
console.log(mul(5,10))

//Arrow Function
const greetArrow = (name)=>{
    console.log(`Good evening ${name}!`)
}
greetArrow('Khalid')

const sayName = (name)=>{
    if(name === 'Heisenberg'){
        console.log(`You're damn right`)
    }
    else{
        console.log(`You're not the cook`)
    }
}
sayName('Heisenberg')


console.log('------------------')


//Classes

class Student{
    studentName
    studentId
    graduateState

    constructor(studentName,studentId,graduateState){
        this.studentName = studentName;
        this.studentId = studentId;
        this.graduateState = graduateState
    }
    printData  = () =>{
        let msg = this.graduateState? `you're a graduate student.`:`you're not a graduate student.`
        console.log(`Your name is ${this.studentName}, and your Student ID is ${this.studentId}, and ${msg}`)
    }

}
const yazan = new Student('Yazan',202120095,false)
yazan.printData()

