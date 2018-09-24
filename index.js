const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: `https://www.billboard.com/charts/hot-100/1997-09-27`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
		const chartListItems = $.html('.chart-list-item');
		console.log(chartListItems);
  })
  .catch((err) => {
    console.log(err);
  });
