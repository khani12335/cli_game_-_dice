import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*6 + 1);

let answer = await inquirer.prompt({
    name:"numberGuessdGame",
    type:"number",
    message:"please gussed a number 1_6..."
});

if(answer.numberGuessdGame===randomNumber){
    console.log("congratulation! You guess a write number...")
}else{
    console.log("You guess a wrong number...")
};