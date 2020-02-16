const getLowestScore = scores => {
  let sentenceIds = Object.keys(scores);
  let sortedIds = sentenceIds.sort((a, b) => scores[a] - scores[b]);

  let lowestScoreId = sortedIds.shift();

  let lowestScore = {};
  lowestScore[lowestScoreId] = scores[lowestScoreId];
  return lowestScore;
};

module.exports = getLowestScore;
