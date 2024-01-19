const GameLogicModel = require('./GameLogicModel');
const QuestionView = require('./View');
const ScoreView = require('./ScoreView');
const Controller = require('./Controller');
const DataReaderModel = require('./DataReaderModel');

const gameLogicModel = new GameLogicModel();
const questionView = new QuestionView();
const scoreView = new ScoreView();
const dataReaderModel = new DataReaderModel('./topics');

const controller = new Controller(
  gameLogicModel,
  questionView,
  scoreView,
  dataReaderModel,
);

controller.startGame();