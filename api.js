const rp = require('request-promise');
const cheerio = require('cheerio');
const baseUrl = 'https://www.billboard.com/charts';

function buildRequest(chart, date) {
  const endpoint = `${baseUrl}/${chart}/${date}`;

  const options = {
    uri: endpoint,
    transform: function (body) {
      return cheerio.load(body);
    }
  };
  return options;
}

 function makeRequest(options) {
  return rp(options)
    .then((data) => {
  	const chartListItems = data.html('.chart-list-item');
  	console.log(chartListItems);
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
  getChartData: function (chart, date) {
    const options = buildRequest(chart, date);
    const response = makeRequest(options);
  }
}
