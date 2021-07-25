const multiplyNumberByTwo = require('../index');
const secretNumber = require("../config");

describe('it tests github actions', () => {
    it('will multiply a given number by 2', () => {
        console.log(secretNumber);
        expect(multiplyNumberByTwo(secretNumber)).toEqual(20)
    })
})