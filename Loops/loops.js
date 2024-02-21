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
