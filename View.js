const inquirer = require('inquirer');

class QuestionView {
  constructor(question) {
    this.question = question;
    this.questions = [];
    this.themes = [];
    this.currentChoice;
  }

  set currentChoiceSetter(choice) {
    this.currentChoice = choice;
  }

  themePromt(themesArray) {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'Hi, welcome to Our Game',
          choices: themesArray,
        },
      ])
      .then((answers) => {
        this.currentChoiceSetter = answers.choice;
        return answers.choice;
      });
  }

  render(question) {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'userAnswer',
          message: question.question,
        },
      ])
      .then((answers) => {
        return answers.userAnswer;
      });
  }
}

module.exports = QuestionView;
