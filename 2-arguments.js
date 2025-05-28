/*let num = process.argv;
if (num.length === 0) {
    console.log("No argument");
}else if (num.length === 1) {
    console.log("Argument found");
}else {
    console.log("Arguments found");
}*/

let num = process.argv.slice(2); // Get only user-passed arguments

if (num.length === 0) {
    console.log("No argument");
} else if (num.length === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

// Print each argument passed
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}