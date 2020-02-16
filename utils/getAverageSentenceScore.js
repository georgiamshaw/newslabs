const getAverageSentenceScore = rows => {
  console.log("rows", rows);
  const sentences = rows.map(row => row["sentence pair id"]);
  const uniqueSentences = [...new Set(sentences)];

  let sentenceScores = {};
  for (i = 0; i < uniqueSentences.length; i++) {
    sentenceScores[uniqueSentences[i]] = [];
  }

  rows.forEach(row => {
    sentenceScores[row["sentence pair id"]].push(row.score);
  });

  uniqueSentences.forEach(sentences => {
    let scores = sentenceScores[sentences];
    let formattedScores = scores.map(score => parseInt(score));
    let averageScore =
      formattedScores.reduce((a, b) => a + b) / formattedScores.length;
    sentenceScores[sentences] = averageScore;
  });
  return sentenceScores;
  // console.log(sentenceScores);
};

module.exports = getAverageSentenceScore;
