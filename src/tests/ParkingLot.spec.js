const parkingLot = require('../ParkingLot');


describe ('Parking Lot' , () => {
    it('should create parking lot with given number',  ()=> {
        const expectedResult = 'Created parking lot with 2 slots';
        const actualResult =  parkingLot.createParkingLot(2);
        expect(actualResult).toBe(expectedResult);
    });
});

