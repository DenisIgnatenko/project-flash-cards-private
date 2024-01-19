class Controller {
    constructor(gameLogic, questionView, scoreView, dataReaderModel) {
      this.gameLogic = gameLogic;
      this.questionView = questionView;
      this.scoreView = scoreView;
      this.dataReaderModel = dataReaderModel;
    }
  
    handleAnswerSubmit(answer) {
      const isCorrect = this.gameLogic.checkAnswer(answer);
      if (isCorrect) {
        this.gameLogic.incrementScore();
        this.scoreView.update(this.gameLogic.score);
      }
    }
  
    nextQuestion() {
      const question = this.gameLogic.getNextQuestion();
      if (!question) {
        console.log('Игра окончена. Ваш счет:', this.gameLogic.getScore());
        return;
      }
      this.questionView.render(question).then((answer) => {
        this.handleAnswerSubmit(answer);
        this.nextQuestion();
      });
    }
  
    startGame() {
      const themes = this.dataReaderModel.readFiles();
      this.questionView
        .themePromt(themes)
        .then(() => {
          const selectedThemeFile = this.questionView.currentChoice;
          const gameData = this.dataReaderModel.readGameData(selectedThemeFile);
          this.gameLogic.setQuestions(gameData);
          this.nextQuestion();
        })
        .catch((error) => {
          console.error('Ошибка во время выбора темы:', error);
        });
    }
  }
  
  module.exports = Controller;