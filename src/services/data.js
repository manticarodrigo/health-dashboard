const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

function groupmonth(array) {
  const bymonth = {};
  for (var i in array) {
    const value = array[i];
    let d = new Date(Number(value.time));
    let month = monthNames[d.getMonth()];
    // initialize if empty
    bymonth[month] = bymonth[month] || 0;
    // update object
    const sum = Number(bymonth[month]) + Number(value.value);
    bymonth[month] = bymonth[month] !== 0 ? sum / 2 : Number(value.value);
  }
  var labels = [];
  var values = [];
  for (var key in bymonth) {
    if (bymonth.hasOwnProperty(key)) {
      labels.push(key);
      values.push(bymonth[key]);
    }
  }
  const series = [values];
  return { labels, series };
}

export function getFutureStressData() {
  const json = require("../data/future_stress.json");
  return new Promise((resolve, reject) => {
    resolve(groupmonth(json));
  });
}

export function getMoodData() {
  const json = require("../data/mood.json");
  return new Promise((resolve, reject) => {
    resolve(groupmonth(json));
  });
}

export function getRuminationData() {
  const json = require("../data/rumination.json");
  return new Promise((resolve, reject) => {
    resolve(groupmonth(json));
  });
}

export function getSleepData() {
  const json = require("../data/sleep.json");
  return new Promise((resolve, reject) => {
    resolve(groupmonth(json));
  });
}
