// Create a new JavaScript class called 'Vacation'.
// A Vacation object should have a destination and a trip length.
// The class should have a method that console.logs a description of the trip. (i.e. "I'm going to <destination> for <length> days.")

class Vacation{
    constructor(dest, trip_length){
    this.dest = dest;
    this.trip_length = trip_length;
    }
    mySentence(){
        console.log(`I am going to ${dest} for ${trip_length} days.`);
    };
}

const myVacay = new Vacation("Cancun", 5);
myVacay.mySentence();
// console.log(myVacay.mySentence());