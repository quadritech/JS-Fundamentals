//This is a special array in Node.js that holds all the command-line arguments and slice is used to skip the first 2 arg

let num = process.argv;

if (num.length === 0){
    console.log("No argument");
}else if (num.length === 1){
    console.log("Argument found");
}else {
    console.log("Arguments found");
}


/*const printArgumentsMessage = () => {
    const numArgs = process.argv.length - 2; // Subtract 2 to exclude node and script path

    if (numArgs === 0) {
        console.log("No argument");
    } else if (numArgs === 1) {
        console.log("Argument found");
    } else {
        console.log("Arguments found");
    }
};

printArgumentsMessage();*/
