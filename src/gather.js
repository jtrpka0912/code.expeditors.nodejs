const fs = require('fs');

const gatherPeople = () => {

  try {
    const data = fs.readFileSync(process.cwd() + '/INPUT.txt', 'utf-8');

    // Split the data by either \r or \n
    const lines = data.split(/\r?\n/);

    return lines.map((line) => {

      const characteristics = line
        .replace('"', '') // Replace the first instance of d-quotes
        .replace('"\\n', '') // Replace the end line and d-quotes
        .split('","'); // Split by ","

      if(characteristics.length === 6) {
        return {
          firstname: characteristics[0],
          lastname: characteristics[1],
          address: characteristics[2],
          city: characteristics[3],
          state: characteristics[4],
          age: characteristics[5]
        } 
      }
    }).filter((person) => person);
  } catch(err) {
    console.error(err);
  }
}

module.exports = {
  gatherPeople
};