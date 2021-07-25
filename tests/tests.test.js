const multiplyNumberByTwo = require('../index');
const secretNumber = require("../config");

describe('it tests github actions', () => {
    it('will multiply a given number by 2', () => {
        expect(multiplyNumberByTwo(secretNumber)).toEqual(secretNumber*2)
    })
})