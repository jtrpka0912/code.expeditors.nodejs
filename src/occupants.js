const printOccupants = (people) => {
  const occupants = [];

  for(const person of people) {
    const occupantKey = person.address
      .toLowerCase()
      .trim()
      .replace(/ /gi, '-')
      .replace(/[,\.]/gi, '');

    if(!occupants[occupantKey]) {
      occupants[occupantKey] = []
    }

    occupants[occupantKey].push(person);
  }

  // console.info(occupants);

  for(const location in occupants) {
    const firstFullAddress = 
      occupants[location][0].address + ' ' +
      occupants[location][0].city + ', ' +
      occupants[location][0].state;

    console.log(firstFullAddress.toUpperCase());
    console.log(occupants[location].length);
  }
};

module.exports = {
  printOccupants
}