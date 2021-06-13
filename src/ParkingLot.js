let slotToBeCreated = [];
let numberOfSlots = 0;
let parkedCars = [];

const createParkingLot =  (slots) => {
    try {
        numberOfSlots = parseInt(slots);
        Array.from({length: numberOfSlots}, (_, i) => (
            slotToBeCreated.push(++i)
        ));
        return `Created parking lot with ${slotToBeCreated.length} slots`;
    } catch (e) {
        console.error(`Please pass only numerical value to create parking lot ${e.message}`);
    }
};

const parkThisCar = (registrationNumber, color) => {
    if (numberOfSlots !== parkedCars.length) {
        const slotNumber = slotToBeCreated[0];
        parkedCars.push({
            'slotNumber': slotNumber,
            'color': color,
            'registrationNumber': registrationNumber,
        });
        slotToBeCreated.shift();
        return `Allocated slot number: ${slotNumber}`
    } else {
        return `Sorry, parking lot is full`;
    }
};

module.exports = {
    createParkingLot,
    parkThisCar
};