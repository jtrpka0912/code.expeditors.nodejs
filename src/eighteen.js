const printOverEighteen = (people) => {
  const organizedPeople = people
    .filter((person) => parseInt(person.age) > 18)
    .sort((personA, personB) => {
      if(personA.lastname < personB.lastname) return -1;
      if(personA.lastname > personB.lastname) return 1;
      return 0;
    });

  console.info(organizedPeople, organizedPeople.length);
};

module.exports = {
  printOverEighteen
}