const rp = require("request-promise");
const cheerio = require("cheerio");
const baseChart = "hot-100";
const baseUrl = "https://www.billboard.com/charts";

function getOpts(chart = baseChart, date) {
  const endpoint = `${baseUrl}/${chart}/${date}`;
  const options = {
    uri: endpoint,
    transform: function(body) {
      return cheerio.load(body);
    }
  };
  return options;
}

async function getData(options) {
  return rp(options)
    .then(result => {
      const chartListItems = result.html(".chart-list-item");
      console.log("success!");
      console.log(chartListItems);
    })
    .catch(err => {
      console.log(err);
    });
}

async function getChartData(chart, date) {
  const options = getOpts(chart, date);
  const response = await getData(options);
}

module.exports = {
  getChartData
};
