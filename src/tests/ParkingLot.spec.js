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

describe('Parking Lot Park A Car',  () => {
    it('should park a car with given registration number and color',  () => {
        const expectedResult = 'Allocated slot number: 1';
        const actualResult =  parkingLot.parkThisCar('UP32BM3695', 'White');
        expect(actualResult).toBe(expectedResult);
    });

    it('should allocate a car correct slot',  () => {
        const expectedResult = 'Allocated slot number: 2';
        const actualResult =  parkingLot.parkThisCar('UP32BM3696', 'Black');
        expect(actualResult).toBe(expectedResult);
    });

    it('should return parking slot is full if parking slot geets full',  () => {
        const expectedResult = 'Sorry, parking lot is full';
        const actualResult =  parkingLot.parkThisCar('UP32BM3697', 'Black');
        expect(actualResult).toBe(expectedResult);
    });
});

