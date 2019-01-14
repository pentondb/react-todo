var React = require("react");
var ReactDOM = require("react-dom");
var { Provider } = require("react-redux");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");

var TodoApp = require("TodoApp");

var actions = require("actions");
var store = require("configureStore").configure();

store.subscribe(() => {
  console.log("New state", store.getState());
});

store.dispatch(actions.addTodo("Clean the yard"));
store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
/* Do not need the require lines? after adding the sassLoader entry in webpack.config.js, lecture 8-84 */
/*
require('style!css!foundation-sites/dist/css/foundation.min.css');
*/
require("style!css!foundation-sites/dist/css/foundation-float.min.css");
$(document).foundation();

// App CSS
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
);
