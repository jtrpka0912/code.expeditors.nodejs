const gather = require('./gather');
const occupants = require('./occupants');

/**
 * @function main
 * @description The main function to run the program
 * @author J. Trpka <jtrpka0912@gmail.com>
 */
const main = () => {
  const people = gather.gatherPeople();
  occupants.occupants(people);
};

main();