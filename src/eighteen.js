const printOverEighteen = (people) => {
  const organizedPeople = people
    .filter((person) => parseInt(person.age) > 18)

  console.info(organizedPeople, organizedPeople.length);
};

module.exports = {
  printOverEighteen
}