const userInformation = require('./information.js');
let cowsay = require("./node_modules/cowsay");

console.log(cowsay.say({
    text: `Hi, my name is ${userInformation.name} and I'm in ${userInformation.campus}`,
    e: "oO",
    T: "U "
}));
