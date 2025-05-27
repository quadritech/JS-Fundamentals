//This is a special array in Node.js that holds all the command-line arguments and slice is used to skip the first 2 arg

let num = process.argv;

if (num.length === 0){
    console.log("No argument");
}else if (num.length === 1){
    console.log("Argument found");
}else {
    console.log("Arguments found");
}

let arg = process.argv.slice(1);

if (arg.length === 0) {
    console.log("No argument");
} else if (arg.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

let arg1 = process.argv.slice(2);

if (arg1.length === 0) {
    console.log("No argument");
} else if (arg1.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}