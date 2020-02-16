const getHighestScore = scores => {
  let sentenceIds = Object.keys(scores);
  let sortedIds = sentenceIds.sort((a, b) => scores[a] - scores[b]);

  let highestScoreId = sortedIds.pop();

  let highestScore = {};
  highestScore[highestScoreId] = scores[highestScoreId];
  return highestScore;
};

module.exports = getHighestScore;
