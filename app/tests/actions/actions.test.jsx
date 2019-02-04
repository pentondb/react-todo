import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
var expect = require("expect");

var actions = require("actions");

var createMockStore = configureMockStore([thunk]);

describe("Actions", () => {
  it("should generate search text action", () => {
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "Some search text"
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it("should generate toggleShowCompleted action", () => {
    var action = {
      type: "TOGGLE_SHOW_COMPLETED"
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it("should generate add todo action", () => {
    var action = {
      type: "ADD_TODO",
      todo: {
        id: "12345abc",
        text: "Some text",
        completed: false,
        createdAt: 98765432
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it("should create todo and dispatch ADD_TODO", done => {
    const store = createMockStore({});
    const todoText = "My todo item";

    store
      .dispatch(actions.startAddTodo(todoText))
      .then(() => {
        const actions = store.getActions();
        const action0 = actions[0];
        console.log("actions[0]: ", actions[0]);
        console.log("actions[0].type: ", actions[0].type);
        console.log('actions[0].todo.text: ', actions[0].todo.text);
        // expect(actions[0]).toInclude({
        //   type: "ADD_TODO"
        // });
        expect(actions[0].type).toInclude("ADD_TODO");
        // expect(actions[0].todo).toInclude({
        //   text: todoText
        // });
        expect(actions[0].todo.text).toInclude(todoText);
        done();
      })
      .catch(done);
  });

  it("should generate add todos action", () => {
    var todos = [
      {
        id: "111",
        text: "anything",
        completed: false,
        completedAt: undefined,
        createAd: 33000
      },
      {
        id: "222",
        text: "something",
        completed: false,
        completedAt: undefined,
        createdAt: 34000
      }
    ];
    var action = {
      type: "ADD_TODOS",
      todos
    };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it("should generate toggleTodo action", () => {
    var action = {
      type: "TOGGLE_TODO",
      id: "123"
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
