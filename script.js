const fs = require("fs");
const formatRows = require("./utils/formatRows");
const getAverageEvaluatorScore = require("./utils/getAverageEvaluatorScore");
const getAverageSentenceScore = require("./utils/getAverageSentenceScore");
const getHighestScore = require("./utils/getHighestScore");
const getLowestScore = require("./utils/getLowestScore");

fs.readFile("./bulgarian-direct-assessment.csv", "utf8", (err, data) => {
  if (err) throw err;
  let formattedRows = formatRows(data);
  let averageEvaluatorScore = getAverageEvaluatorScore(formattedRows);
  fs.writeFile("./json1.json", JSON.stringify(averageEvaluatorScore), err => {
    if (err) throw err;
    console.log("Wrote average evaluator scores to json1");
  });
});

fs.readFile("./bulgarian-direct-assessment.csv", "utf8", (err, data) => {
  if (err) throw err;
  let formattedRows = formatRows(data);
  let averageSentenceScore = getAverageSentenceScore(formattedRows);
  let highestScores = getHighestScore(averageSentenceScore);
  let lowestScores = getLowestScore(averageSentenceScore);

  let json = {};
  json.averageSentenceScores = averageSentenceScore;
  json.highestScore = highestScores;
  json.lowestScore = lowestScores;

  fs.writeFile("./json2.json", JSON.stringify(json), err => {
    if (err) throw err;
    console.log("Wrote average, highest and lowest sentence scores to json2");
  });
});
