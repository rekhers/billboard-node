const { getChartData } = require("./services/api.js");
const chart = "hot-100";
const date = "2003-09-27";

getChartData(chart, date);
