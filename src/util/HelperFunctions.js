
const calculateParkingCharge = (hours) => {
    let minimumCharges = 10;
    let parkingCharge;
    if ((hours - 2) > 0 ) {
        parkingCharge = minimumCharges + ((hours - 2) * 10)
        return parkingCharge
    }
    return minimumCharges;
};

module.exports = { calculateParkingCharge };