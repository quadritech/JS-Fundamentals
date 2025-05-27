/*let num = process.argv;

if (num.length === 0) {
    console.log("No argument");
}else if (num.length === 1) {
    console.log("Argument found");
}else {
    console.log("Arguments found");
}*/


let num = ["No argument", "Argument found", "Arguments found"]

num.forEach(function(Arguments){
    console.log(Arguments);
})