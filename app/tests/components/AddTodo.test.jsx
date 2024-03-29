var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jQuery");

import * as actions from 'actions';

var { AddTodo } = require("AddTodo");

describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist();
  });

  it("should dispatch ADD_TODO when valid todo text", () => {
    var todoText = "test value";
    var action = actions.startAddTodo(todoText);

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("should not dispatch ADD_TODO on invalid todo text", () => {
    var todoText = "";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = "";
    TestUtils.Simulate.submit($el.find("form")[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
