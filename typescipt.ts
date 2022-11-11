// console.log('hello world')

let firstName: string = "Damian";
let age: number = 4;

let fruits: string[] = [
    'banana',
    'apple'
]

console.log(`
First Name: ${firstName}
Your Age: ${age}
you have many ${fruits}
`)

enum taxForm {
    standard = '1040',
    childCredit = '1065',
    SCorp = '1121',
    CCorp = '1120s'
}

console.log(`
you need form ${taxForm.childCredit}`
)