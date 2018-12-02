var moment = require('moment');

console.log(moment().format());

// January 1st 1970 12:00 AM
var now = moment();
console.log('Current timestamp: ' + now.unix());

var timestamp = 1543707362;
var currentMoment = moment.unix(timestamp);
console.log('Current moment: ' + currentMoment.format('MMM D, YYYY @ h:mm A'));
console.log('Current moment: ' + currentMoment.format('MMMM Do, YYYY @ h:mm A'));
