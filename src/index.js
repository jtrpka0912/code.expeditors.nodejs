const gather = require('./gather');
const occupants = require('./occupants');
const eighteen = require('./eighteen');
const combine = require('./combine');

/**
 * @function main
 * @description The main function to run the program
 * @author J. Trpka <jtrpka0912@gmail.com>
 */
const main = () => {
  const people = gather.gatherPeople();
  // occupants.printOccupants(people);
  // eighteen.printOverEighteen(people);
  combine.occupantsOverEighteen(people);
};

main();