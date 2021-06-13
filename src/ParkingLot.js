let slotToBeCreated = [];
let numberOfSlots = 0;

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

module.exports = {
    createParkingLot
};