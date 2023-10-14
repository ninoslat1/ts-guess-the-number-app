import inquirer from "inquirer";

type userAnswer = {
    guess: number
}

const multiplier:number = 10
const randNum:number = Math.floor(Math.random() * multiplier);

const answer:userAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "guess",
        message: "Guess a number between 1 and 10"
    }
])

const {guess} = answer


if(guess <= multiplier === false){
    console.log(`Number ${guess} is way too big`)
    process.exit(404)
}

console.log(`Your guess number is ${answer.guess} and the system random number is ${randNum}`)

if(guess === randNum){
    console.log("Correct!")
}
console.log(`False number, try again later`)