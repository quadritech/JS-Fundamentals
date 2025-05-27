//This is a special array in Node.js that holds all the command-line arguments and slice is used to skip the first 2 arg

const num = process.argv.slice(2);

if (num === 0){
    console.log("No argument");
}else if (num === 1){
    console.log("Argument found");
}else {
    console.log("Arguments found")
}