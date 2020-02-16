const getAverageEvaluatorScore = rows => {
  console.log(rows);
  const evaluators = rows.map(row => row["evaluator id"]);
  const uniqueEvaluators = [...new Set(evaluators)];

  let evaluatorScores = {};
  for (i = 0; i < uniqueEvaluators.length; i++) {
    evaluatorScores[uniqueEvaluators[i]] = [];
  }

  rows.forEach(row => {
    evaluatorScores[row["evaluator id"]].push(row.score);
  });

  uniqueEvaluators.forEach(evaluator => {
    let scores = evaluatorScores[evaluator];
    let formattedScores = scores.map(score => parseInt(score));
    let averageScore =
      formattedScores.reduce((a, b) => a + b) / formattedScores.length;
    evaluatorScores[evaluator] = averageScore;
  });
  return evaluatorScores;
  console.log(evaluatorScores);
};

module.exports = getAverageEvaluatorScore;
