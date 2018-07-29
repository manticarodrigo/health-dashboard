const csv = require("csvtojson");

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
    let d = new Date(value["time"] * 1000);
    // d = (d.getFullYear() - 1970) * 12 + d.getMonth();
    let month = monthNames[d.getMonth()];
    // initialize if empty
    bymonth[month] = bymonth[month] || 0;
    // update object
    const sum = Number(bymonth[month]) + Number(value.value);
    bymonth[month] = bymonth[month] !== 0 ? sum / 2 : Number(value.value);
  }
  var labels = [];
  var series = [];
  for (var key in bymonth) {
    if (bymonth.hasOwnProperty(key)) {
      labels.push(key);
      series.push(bymonth[key]);
    }
  }
  return { labels, series };
}

export function getData(headers, filePath) {
  return new Promise((resolve, reject) => {
    csv({
      noheader: false,
      headers: headers
    })
      .fromFile(filePath)
      .then(data => {
        resolve(groupmonth(data));
      })
      .catch(err => {
        reject(err);
      });
  });
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