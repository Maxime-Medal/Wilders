const chalk = require('chalk');

const student = {
    name1 : "Léo",
    name2 :  "Thomas",
    name3 :  "Anas",
    name4 :  "Laurie",
}


console.log ((chalk.green('Hello '))+(chalk.blue(`${student.name1}`))+ (chalk.yellow(`${student.name2}`)) +(chalk.cyan(`${student.name3}`))+ (chalk.magenta(`${student.name4}`))
)