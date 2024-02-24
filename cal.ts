import inquirer  from "inquirer"

console.log("welcome to 'Making Simple Calculator' Develope by HIRA BAQAR  ");                                                                  

 let calculation =await  inquirer.prompt([
{ type:"number",
name:"num1",
message:"Enter your first number?"
},
{ type:"number",
name:"num2",
message:"Enter your second number?"
},
{ type:"list",
name:"operator",
message:"select your operation?",
choices:["sum","sub","multiply","divide"]
}
])
if(calculation.operator === "sum"){
    console.log(`${calculation.num1} + ${calculation.num2} = ${calculation.num1 + calculation.num2}`)

}
else if(calculation.operator === "sub"){
    console.log(`${calculation.num1} - ${calculation.num2} = ${calculation.num1 - calculation.num2}`)

}
else if(calculation.operator === "multiply"){
    console.log(`${calculation.num1} * ${calculation.num2} = ${calculation.num1 * calculation.num2}`)

 }
 else if(calculation.operator === "divide"){
     console.log(`${calculation.num1} / ${calculation.num2} = ${calculation.num1 / calculation.num2}`)

}
// expot{};


