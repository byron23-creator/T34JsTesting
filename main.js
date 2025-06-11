const Book = require('./Classes/Book');
const Movie = require('./Classes/Movie');
const CD = require('./Classes/CD');

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log('Is historyOfEverything checked out?', historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log('Average rating for historyOfEverything:', historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log('Is speed checked out?', speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log('Average rating for speed:', speed.getAverageRating());

const discovery = new CD('Daft Punk', 'Discovery', ['One More Time', 'Aerodynamic', 'Digital Love', 'Harder, Better, Faster, Stronger', 'Crescendolls']);
discovery.toggleCheckOutStatus();
console.log('Is discovery checked out?', discovery.isCheckedOut);
discovery.addRating(5);
discovery.addRating(5);
discovery.addRating(4);
console.log('Average rating for discovery:', discovery.getAverageRating());
console.log('Shuffled songs:', discovery.shuffle());
