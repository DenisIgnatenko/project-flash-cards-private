class ScoreView {
    constructor(score) {
      this.score = score;
    }
  
    render(score) {
      this.score = score;
      return this.score;
    }
  
    update(newScore) {
      this.score += newScore;
      return this.score;
    }
  }
  
  module.exports = ScoreView;
  