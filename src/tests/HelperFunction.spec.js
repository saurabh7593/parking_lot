const helperFunctions = require('../util/helperFunctions');

describe('Helper Function',  () => {
    it('should return the correct billing amount for given 4 hours',  () => {
        const expectedResult = 30;
        const actualResult =  helperFunctions.calculateParkingCharge(4);
        expect(actualResult).toBe(expectedResult);
    });

    it('should return the correct billing amount for given 8 hours',  () => {
        const expectedResult = 70;
        const actualResult =  helperFunctions.calculateParkingCharge(8);
        expect(actualResult).toBe(expectedResult);
    });

    it('should return the minimum billing amount for less than 2 hours hours',  () => {
        const expectedResult = 10;
        const actualResult =  helperFunctions.calculateParkingCharge(1);
        expect(actualResult).toBe(expectedResult);
    });
});