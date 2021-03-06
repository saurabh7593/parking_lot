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

describe('Parking Lot Status of Parking',  () => {
    it('should return the correct status of parking lot',  () => {
        const expectedResult = 'SlotNo.RegistrationNo.' + '1UP32BM3695' + '2UP32BM3696'.replace(/\s/g, '');
        const actualResult = ( parkingLot.statusOfParkingLot()).replace(/\s/g, '');
        expect(actualResult).toBe(expectedResult);
    });
});

describe('Parking Lot Release a Car',  () => {
    it('should return the correct billing amount for given hours',  () => {
        const expectedResult = 'Registration number UP32BM3695 with Slot Number 1 is free with Charge 50';
        const actualResult =  parkingLot.releaseACar('UP32BM3695', '6');
        expect(actualResult).toBe(expectedResult);
    });
    it('should give registration number not found if car is not in the parking lot',  () => {
        const expectedResult = 'Registration number UP32BM3699 not found';
        const actualResult =  parkingLot.releaseACar('UP32BM3699', '6');
        expect(actualResult).toBe(expectedResult);
    });
});

