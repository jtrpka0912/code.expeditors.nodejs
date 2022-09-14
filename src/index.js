const gather = require('./gather');

/**
 * @function main
 * @description The main function to run the program
 * @author J. Trpka <jtrpka0912@gmail.com>
 */
const main = () => {
  const people = gather();

  console.info(people);
};

main();