const fs = require('fs');

const gatherPeople = () => {

  try {
    const contents = fs.readFileSync(process.cwd() + '/INPUT.txt');
  } catch(err) {
    console.error(err);
  }
}

module.exports = () => gatherPeople();