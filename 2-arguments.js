//This is a special array in Node.js that holds all the command-line arguments and slice is used to skip the first 2 arg

let num = process.argv;

num = ["No argument", "Argument found", "Arguments found"]
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
if (num.length === 0){
    console.log("No argument");
}else if (num.length === 1){
    console.log("Argument found");
}else {
    console.log("Arguments found");
}

