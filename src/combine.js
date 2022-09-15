const occupantsOverEighteen = (people) => {
  // Filter and sort by last name
  const overEighteenSortedByLastName = people
    .filter((person) => parseInt(person.age) > 18)
    .sort((personA, personB) => {
      if(personA.lastname < personB.lastname) return -1;
      if(personA.lastname > personB.lastname) return 1;
      return 0;
    });

  const occupants = [];
  
  // Separate by households
  for(const person of overEighteenSortedByLastName) {
    const occupantKey = person.address
      .toLowerCase()
      .trim()
      .replace(/ /gi, '-')
      .replace(/[,\.]/gi, '') + '-' +
      person.city.toLowerCase() + '-' +
      person.state.toLowerCase();

    if(!occupants[occupantKey]) {
      occupants[occupantKey] = []
    }

    occupants[occupantKey].push(person);
  }

  // Loop through each household then sort each by firstname
  Object.keys(occupants).forEach((household) => {
    const firstFullAddress = 
      occupants[household][0].address + ' ' +
      occupants[household][0].city + ', ' +
      occupants[household][0].state;

      // Print out the household and occupancy
      console.log(firstFullAddress.toUpperCase(), ':', occupants[household].length);

      const families = [];

      for(person of occupants[household]) {
        if(!families[person.lastname]) {
          families[person.lastname] = [];
        }
    
        families[person.lastname].push(person);
      }

      Object.keys(families).forEach((family) => {
        families[family].sort((personA, personB) => {
          if(personA.firstname < personB.firstname) return -1;
          if(personA.firstname > personB.firstname) return 1;
          return 0;
        });
    
        families[family].forEach((person) => {
          // Print out the individuals per househould
          console.log(person.firstname, person.lastname, person.address, person.age);
        })
      });

      // Print out a space
      console.info(' ');
  })
};

module.exports = {
  occupantsOverEighteen
};