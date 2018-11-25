var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var ToDoApp = require('ToDoApp');

// Load foundation
/* Do not need the require lines? after adding the sassLoader entry in webpack.config.js, lecture 8-84 */
/*
require('style!css!foundation-sites/dist/css/foundation.min.css');
*/
require('style!css!foundation-sites/dist/css/foundation-float.min.css');
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <ToDoApp />,
  document.getElementById('app')
);
