const printOverEighteen = (people) => {
  const organizedPeople = people
    .filter((person) => parseInt(person.age) > 18)
    .sort((personA, personB) => {
      if(personA.lastname < personB.lastname) return -1;
      if(personA.lastname > personB.lastname) return 1;
      return 0;
    });

  const families = [];

  for(const person of organizedPeople) {
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
};

module.exports = {
  printOverEighteen
}