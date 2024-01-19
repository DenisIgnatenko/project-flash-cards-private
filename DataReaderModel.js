const fs = require('fs');
const path = require('path');

class DataReaderModel {
  constructor(dirName) {
    this.dirName = dirName;
  }

  readFiles() {
    return fs.readdirSync(this.dirName);
  }

  readGameData(file) {
    const pathtofile = path.join(this.dirName, file);
    const rawData = fs.readFileSync(pathtofile, 'utf8');
    const strings = rawData.split('\n').filter((line) => line.trim());

    const questionsArray = [];

    for (let i = 0; i < strings.length; i += 2) {
      const question = strings[i];
      const answer = strings[i + 1];

      questionsArray.push({ question, answer });
    }

    return questionsArray;
  }
}
module.exports = DataReaderModel;
