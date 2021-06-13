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

const statusOfParkingLot = () => {
    let statusString = `Slot No.    Registration No.`;
    parkedCars = parkedCars.sort((a,b)=> {
        if (a.slotNumber > b.slotNumber) return 1;
        if (a.slotNumber < b.slotNumber) return -1;
        return 0
    });
    parkedCars.forEach(function (carDetails) {
        statusString += `\n${carDetails.slotNumber}           ${carDetails.registrationNumber}`
    });

    return statusString;
};

module.exports = {
    createParkingLot,
    parkThisCar,
    statusOfParkingLot
};