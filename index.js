const secretNumber = require("./config");

function multiplyNumberByTwo(n) {
    return n*2
}

multiplyNumberByTwo(secretNumber);

module.exports = multiplyNumberByTwo