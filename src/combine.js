const occupantsOverEighteen = (people) => {
  const overEighteenSortedByLastName = people
    .filter((person) => parseInt(person.age) > 18)
    .sort((personA, personB) => {
      if(personA.lastname < personB.lastname) return -1;
      if(personA.lastname > personB.lastname) return 1;
      return 0;
    });

  const occupants = [];
  
  for(const person of overEighteenSortedByLastName) {
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

  Object.keys(occupants).forEach((household) => {
    const firstFullAddress = 
      occupants[household][0].address + ' ' +
      occupants[household][0].city + ', ' +
      occupants[household][0].state;

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
          console.log(person.firstname, person.lastname, person.address, person.age);
        })
      });

      console.info(' ');
  })
};

module.exports = {
  occupantsOverEighteen
};