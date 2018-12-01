var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = { a: 'b' };
            TodoAPI.setTodos(badTodos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return an array for good localStorage data', () => {
            var goodTodos = [{ id: 402, text: 'The good good', completed: false }];
            localStorage.setItem('todos', JSON.stringify(goodTodos));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(goodTodos);
        });
    });

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'some text here',
                completed: true
            }, {
                id: 2,
                text: 'other text here',
                completed: false
            }, {
                id: 3,
                text: 'some text here',
                completed: true
            },
        ];

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return one item is showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should return all items is no search text', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return only matching items if search text is provided', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some text');
            expect(filteredTodos.length).toBe(2);
        });
    });
});