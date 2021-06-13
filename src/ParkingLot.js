const {calculateParkingCharge} = require("./util/helperFunctions");

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

const releaseACar = (registrationNumber, hours) => {
    function removeCarFromTheParkingSlot(carDetails) {
        const index = parkedCars.indexOf(carDetails);
        if (index !== -1) {
            parkedCars.splice(index, 1);
        }
    }

    if (parkedCars.length > 0) {
        let charge;
        const carDetails = parkedCars.find(car => car.registrationNumber === registrationNumber);

        try {
            charge = calculateParkingCharge(parseInt(hours));
        } catch (e) {
            console.error(`Please pass only numerical value for parking hours ${e.message}`)
        }


        if (carDetails) {
            removeCarFromTheParkingSlot(carDetails);

            slotToBeCreated.push(carDetails.slotNumber);
            slotToBeCreated.sort();

            return `Registration number ${carDetails.registrationNumber} with Slot Number ${carDetails.slotNumber} is free with Charge ${charge}`;

        } else {
            return `Registration number ${registrationNumber} not found`;
        }
    }
};

module.exports = {
    createParkingLot,
    parkThisCar,
    statusOfParkingLot,
    releaseACar
};