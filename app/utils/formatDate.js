const moment = require('moment');

module.exports = function formatDateFromDt(dt) {
	const date = new Date(dt * 1000);
	const formattedDate = moment(date).format('dddd, MMM Do');
	return formattedDate;
};
