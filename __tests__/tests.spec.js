const formatRows = require("../utils/formatRows");
const getAverageEvaluatorScore = require("../utils/getAverageEvaluatorScore");
const getAverageSentenceScore = require("../utils/getAverageSentenceScore");
const getHighestScore = require("../utils/getHighestScore");
const getLowestScore = require("../utils/getLowestScore");

test("Check tests are working", () => {
  expect(1).toBe(1);
});

test("Test getAverageEvaluatorScore function returns correct evaluator average", () => {
  const rows = [
    {
      "sentence pair id": "BG_SE_25",
      "evaluator id": "DW_Bulgarian_01",
      score: "93",
      "human translation": "Случаят вдигна голям шум в руските медии.",
      "machine translation": "Случаят получи доста медийно внимание в Русия.",
      original: "The case has received a lot of media attention in Russia. "
    },
    {
      "sentence pair id": "BG_SE_25",
      "evaluator id": "DW_Bulgarian_01",
      score: "90",
      "human translation": "Случаят вдигна голям шум в руските медии.",
      "machine translation": "Случаят получи доста медийно внимание в Русия.",
      original: "The case has received a lot of media attention in Russia. "
    },
    {
      "sentence pair id": "BG_SE_25",
      "evaluator id": "DW_Bulgarian_01",
      score: "91",
      "human translation": "Случаят вдигна голям шум в руските медии.",
      "machine translation": "Случаят получи доста медийно внимание в Русия.",
      original: "The case has received a lot of media attention in Russia. "
    }
  ];
  const averageEvaluatorScore = { DW_Bulgarian_01: 91.33333333333333 };
  expect(getAverageEvaluatorScore(rows)).toStrictEqual(averageEvaluatorScore);
});

test("Test getAverageSentenceScore function returns correct sentence average", () => {
  const rows = [
    {
      "sentence pair id": "BG_SE_24",
      "evaluator id": "BBC_Bulgarian_03",
      score: "71",
      "human translation":
        '"И никога не съм им казвал, че сме специално семейство. "',
      "machine translation":
        '"Също така никога не съм казвал, че сме специално семейство."',
      original: "I also never said that we are a special family. "
    },
    {
      "sentence pair id": "BG_SE_24",
      "evaluator id": "DW_Bulgarian_01",
      score: "71",
      "human translation":
        '"И никога не съм им казвал, че сме специално семейство. "',
      "machine translation":
        '"Също така никога не съм казвал, че сме специално семейство."',
      original: "I also never said that we are a special family. "
    },
    {
      "sentence pair id": "BG_SE_24",
      "evaluator id": "BBC_Bulgarian_02",
      score: "63",
      "human translation":
        '"И никога не съм им казвал, че сме специално семейство. "',
      "machine translation":
        '"Също така никога не съм казвал, че сме специално семейство."',
      original: "I also never said that we are a special family. "
    }
  ];
  const averageSentenceScore = { BG_SE_24: 68.33333333333333 };
  expect(getAverageSentenceScore(rows)).toStrictEqual(averageSentenceScore);
});

test("Test getHighestScore function returns highest score in an object", () => {
  const sentenceScores = {
    BG_SE_191: 80.8,
    BG_SE_192: 35.8,
    BG_SE_193: 55.4,
    BG_SE_194: 9.2,
    BG_SE_197: 62.2,
    BG_SE_198: 54.4
  };
  expect(getHighestScore(sentenceScores)).toStrictEqual({ BG_SE_191: 80.8 });
});

test("Test getLowestScore function returns lowest score in an object", () => {
  const sentenceScores = {
    BG_SE_191: 80.8,
    BG_SE_192: 35.8,
    BG_SE_193: 55.4,
    BG_SE_194: 9.2,
    BG_SE_197: 62.2,
    BG_SE_198: 54.4
  };
  expect(getLowestScore(sentenceScores)).toStrictEqual({ BG_SE_194: 9.2 });
});
