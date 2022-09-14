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

  console.info(occupants);
};

module.exports = {
  occupantsOverEighteen
};