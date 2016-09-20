var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var action = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State: ', store.getState());
});

store.dispatch(action.addTodo('Clean the yard'));
store.dispatch(action.setSearchText('yard'));
store.dispatch(action.toggleShowCompleted());

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
