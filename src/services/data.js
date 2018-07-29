const csv = require("csvtojson");

function getData(headers, filePath) {
  return csv({
    noheader: false,
    headers: headers
  }).fromFile(filePath);
}

export function getFutureStressData() {
  const headers = ["time", "value"];
  const filePath = "../../data/future_stress.csv";
  return getData(headers, filePath);
}

export function getMoodData() {
  const headers = ["time", "value"];
  const filePath = "../../data/mood.csv";
  return getData(headers, filePath);
}

export function getRuminationData() {
  const headers = ["time", "value"];
  const filePath = "../../data/rumination.csv";
  return getData(headers, filePath);
}

export function getSleepData() {
  const headers = ["time", "value"];
  const filePath = "../../data/sleep.csv";
  return getData(headers, filePath);
}
