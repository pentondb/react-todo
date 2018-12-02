var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'dummy text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({
            todos: []
        });
        todoApp.handleAddTodo(todoText);

        // expect(todoApp.state.todos.length).toBe(1);
        expect(todoApp.state.todos[0].text).toBe(todoText);
        // Expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined,
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [todoData] });

        // check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle with id = 11
        todoApp.handleToggle(11);
        // verify that completed value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
        // Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    // After toggling a completed item to uncompleted, expect completedAt to be removed

    it('should remove completedAt when toggling a completed item', () => {
        var todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            createdAt: 1543715758,
            completedAt: 1543717500,
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [todoData] });

        // check that todos first item has completed value of true
        expect(todoApp.state.todos[0].completed).toBe(true);
        // call handleToggle with id = 11
        todoApp.handleToggle(11);
        // verify that completed value changed
        expect(todoApp.state.todos[0].completed).toBe(false);
        // Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toNotBeA('number');
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});