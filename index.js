const readline = require('readline');
const parkingLotInstance = require('./src/ParkingLot');
const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

( () => {

    readLine.on('line', (input) => {
        input = input.split(" ");
        switch (input[0]) {
            case ('create_parking_lot'):

                try {
                    console.log( parkingLotInstance.createParkingLot(input[1]));
                } catch (e) {
                    console.log(`error ==> ${e}`);
                }
                break;

            case ('park'):
                try {
                    console.log( parkingLotInstance.parkThisCar(input[1].trim()));
                } catch (e) {
                    console.log(`error ==> ${e}`);
                }
                break;

            case ('leave'):

                try {
                    console.log( parkingLotInstance.releaseACar(input[1], input[2]));
                } catch (e) {
                    console.log(`error ==> ${e}`);
                }
                break;

            case ('status'):

                try {
                    console.log( parkingLotInstance.statusOfParkingLot());
                } catch (e) {
                    console.log(`error ==> ${e}`);
                }
                break;

            default:
                console.log('Command not found');
        }

    });
}) ();
