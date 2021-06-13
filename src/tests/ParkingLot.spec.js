const parkingLot = require('../ParkingLot');


describe ('Parking Lot' , () => {
    it('should not create parking lot if input is invalid',  ()=> {
        const expectedResult = 'Created parking lot with 0 slots';
        const actualResult =  parkingLot.createParkingLot('invalid');
        expect(actualResult).toBe(expectedResult);
    });

    it('should create parking lot with given number',  ()=> {
        const expectedResult = 'Created parking lot with 2 slots';
        const actualResult =  parkingLot.createParkingLot(2);
        expect(actualResult).toBe(expectedResult);
    });
});

