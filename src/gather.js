const fs = require('fs');

const gatherPeople = () => {

  try {
    const data = fs.readFileSync(process.cwd() + '/INPUT.txt', 'utf-8');

    // Split the data by either \r or \n
    const lines = data.split(/\r?\n/);

    const people = lines.map((line) => {

      const characteristics = line
        .replace('"', '') // Replace the first instance of d-quotes
        .replace('"\\n', '') // Replace the end line and d-quotes
        .split('","'); // Split by ","

      console.info(characteristics);

      return null;
    });
  } catch(err) {
    console.error(err);
  }
}

module.exports = () => gatherPeople();