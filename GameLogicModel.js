class GameLogicModel {
  constructor(themes) {
    this.questions = [];
    this.themes = themes;
    this.currentThemeIndex = 0;
    this.score = 0;
  }

  checkAnswer(answer) {
    // console.log(answer, this.questions);

    const result = this.questions
      .map((el) => (el.answer === answer ? true : false))
      .some((el) => el === true);
    return result;
  }

  incrementScore() {
    return this.score++;
  }

  getNextQuestion() {
    if (this.currentThemeIndex < this.questions.length) {
      const question = this.questions[this.currentQuestionIndex];
      this.currentQuestionIndex += 1;
      return question;
    } else {
      return null;
    }
  }

  setQuestions(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  getScore() {
    return this.score;
  }
}

module.exports = GameLogicModel;
